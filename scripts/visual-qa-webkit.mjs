import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pnpm = process.env.PNPM_BIN || "pnpm";
process.env.PLAYWRIGHT_BROWSERS_PATH ||= join(root, ".playwright-browsers");

const baseUrl = process.env.QA_WEBKIT_BASE_URL || "http://127.0.0.1:3200";
const routes = [
  ["/", "home"],
  ["/games", "games"],
  ["/games/captain-boom", "captain-boom"],
  ["/games/nuclear-blast", "nuclear-blast"],
  ["/games/wars-of-the-gods", "wars-of-the-gods"],
  ["/games/goblin-gems", "goblin-gems"],
  ["/games/royal-fruits", "royal-fruits"],
  ["/portfolio", "portfolio"],
  ["/portfolio/elementals", "elementals"],
  ["/portfolio/lc-app", "lc-app"],
  ["/services", "services"],
  ["/contact", "contact"],
  ["/__founder-review-404__", "not-found"]
];

const expectedStatus = new Map([["/__founder-review-404__", 404]]);

// Chromium performs the exhaustive route/responsive matrix. WebKit is intentionally
// a focused Safari-engine smoke across release-critical routes. Avoid `networkidle` here:
// WebKit can keep background requests open long enough to exhaust the CI job timeout.
const viewports = [
  { name: "1440x1000", width: 1440, height: 1000 },
  { name: "430x932", width: 430, height: 932 }
];

const navigationTimeoutMs = 15000;
const imageSettleTimeoutMs = 4000;

async function waitForServer(url) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function capture() {
  const { webkit } = await import("@playwright/test");
  const browser = await webkit.launch();
  const results = [];
  const failureDir = join(root, "qa", "screenshots", "webkit");
  mkdirSync(failureDir, { recursive: true });

  try {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport });
      page.setDefaultTimeout(5000);
      page.setDefaultNavigationTimeout(navigationTimeoutMs);

      for (const [route, slug] of routes) {
        const url = `${baseUrl}${route}`;
        const response = await page.goto(url, {
          waitUntil: "domcontentloaded",
          timeout: navigationTimeoutMs
        });

        // Give normal load a short grace period without letting third-party/background
        // traffic turn a smoke test into a multi-minute wait.
        await page.waitForLoadState("load", { timeout: 5000 }).catch(() => {});

        await page.evaluate(async ({ imageSettleTimeoutMs }) => {
          const step = Math.max(window.innerHeight * 0.8, 400);
          for (let position = 0; position < document.body.scrollHeight; position += step) {
            window.scrollTo(0, position);
            await new Promise((resolve) => setTimeout(resolve, 60));
          }

          window.scrollTo(0, document.body.scrollHeight);

          const decodeAll = Promise.allSettled(
            Array.from(document.images).map(async (img) => {
              if (img.complete) return;
              try {
                await img.decode();
              } catch {
                // Broken images are reported by the metrics below; decode itself is not the assertion.
              }
            })
          );

          await Promise.race([
            decodeAll,
            new Promise((resolve) => setTimeout(resolve, imageSettleTimeoutMs))
          ]);

          window.scrollTo(0, 0);
          await new Promise((resolve) => setTimeout(resolve, 120));
        }, { imageSettleTimeoutMs });

        const metrics = await page.evaluate(() => {
          const doc = document.documentElement;
          const images = Array.from(document.images);
          const clippedText = Array.from(document.querySelectorAll("h1,h2,h3,p,a,button,span,strong"))
            .filter((element) => {
              const style = getComputedStyle(element);
              const rect = element.getBoundingClientRect();
              const intentionallyHidden =
                style.display === "none" ||
                style.visibility === "hidden" ||
                style.clip !== "auto" ||
                style.clipPath !== "none" ||
                ((rect.width <= 2 || rect.height <= 2) && style.position === "absolute");
              if (intentionallyHidden || style.overflow === "visible") return false;
              return element.scrollWidth > element.clientWidth + 2 || element.scrollHeight > element.clientHeight + 2;
            })
            .slice(0, 12)
            .map((element) => ({
              tag: element.tagName,
              text: (element.textContent || "").trim().slice(0, 100)
            }));

          return {
            title: document.title,
            h1Count: document.querySelectorAll("h1").length,
            horizontalOverflow: doc.scrollWidth > doc.clientWidth + 1,
            scrollWidth: doc.scrollWidth,
            clientWidth: doc.clientWidth,
            imageCount: images.length,
            brokenImages: images.filter((img) => !img.complete || img.naturalWidth === 0).length,
            missingAltImages: images.filter((img) => !img.hasAttribute("alt")).length,
            clippedText
          };
        });

        const item = {
          browser: "webkit",
          viewport: viewport.name,
          route,
          url,
          status: response?.status() || 0,
          finalPathname: new URL(page.url()).pathname,
          ...metrics
        };

        const requiredStatus = expectedStatus.get(route) || 200;
        const failed =
          item.status !== requiredStatus ||
          item.h1Count !== 1 ||
          item.horizontalOverflow ||
          item.brokenImages ||
          item.missingAltImages ||
          item.clippedText.length;

        if (failed) {
          await page.screenshot({ path: join(failureDir, `${viewport.name}-${slug}.png`), fullPage: true });
        }

        results.push({ ...item, failed: Boolean(failed) });
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }

  return results;
}

let server;
try {
  server = spawn(pnpm, ["exec", "next", "start", "-H", "127.0.0.1", "-p", "3200"], {
    cwd: root,
    env: process.env,
    stdio: "inherit"
  });
  await waitForServer(baseUrl);

  const results = await capture();
  const failures = results.filter((item) => item.failed);
  const summary = {
    createdAt: new Date().toISOString(),
    browser: "webkit",
    baseUrl,
    viewports,
    routes: routes.map(([route]) => route),
    results,
    failures
  };

  writeFileSync(join(root, "qa", "screenshots", "webkit-summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify({ checks: results.length, failures }, null, 2));

  if (failures.length) process.exitCode = 1;
} finally {
  if (server) server.kill("SIGTERM");
}
