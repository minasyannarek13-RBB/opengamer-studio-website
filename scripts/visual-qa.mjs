import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const pnpm = process.env.PNPM_BIN || "/Users/macbook/Library/pnpm/bin/pnpm";
const nodeBin = "/Users/macbook/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin";
process.env.PATH = `${nodeBin}:${process.env.PATH || ""}`;
process.env.PLAYWRIGHT_BROWSERS_PATH ||= join(root, ".playwright-browsers");

const deployedBaseUrl = "https://opengamer-studio-prototype.vercel.app";
const localBaseUrl = process.env.QA_LOCAL_BASE_URL || "http://127.0.0.1:3100";
const args = new Set(process.argv.slice(2));
const targetArg = [...args].find((arg) => arg.startsWith("--target="));
const target = targetArg?.split("=")[1] || "local";
const skipBuild = args.has("--skip-build");
const noServer = args.has("--no-server");

function readGameRoutes() {
  const gamesContent = readFileSync(join(root, "content", "games.ts"), "utf8");
  const slugs = [...gamesContent.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
  return slugs.map((slug) => [`/games/${slug}`, `game-${slug}`]);
}

const routes = [
  ["/", "home"],
  ["/services", "services"],
  ["/games", "games"],
  ...readGameRoutes(),
  ["/technology", "technology"],
  ["/about", "about"],
  ["/contact", "contact"],
  ["/privacy-policy", "privacy-policy"],
  ["/terms-of-use", "terms-of-use"],
  ["/cookie-policy", "cookie-policy"]
];

const viewports = [
  { group: "desktop", name: "1440x1000", width: 1440, height: 1000 },
  { group: "tablet", name: "1024x900", width: 1024, height: 900 },
  { group: "tablet", name: "768x1024", width: 768, height: 1024 },
  { group: "mobile", name: "390x844", width: 390, height: 844 },
  { group: "mobile", name: "375x812", width: 375, height: 812 }
];

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    env: process.env,
    stdio: "inherit"
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${commandArgs.join(" ")} failed`);
  }
}

async function waitForServer(url) {
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function capture(baseUrl, label) {
  const { chromium } = await import("@playwright/test");
  const browser = await chromium.launch();
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    for (const [route, slug] of routes) {
      const url = `${baseUrl}${route}`;
      await page.goto(url, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        const step = Math.max(window.innerHeight * 0.8, 400);
        for (let position = 0; position < document.body.scrollHeight; position += step) {
          window.scrollTo(0, position);
          await new Promise((resolve) => setTimeout(resolve, 180));
        }
        window.scrollTo(0, document.body.scrollHeight);
        await Promise.allSettled(Array.from(document.images).map((img) => img.decode()));
        window.scrollTo(0, 0);
        await new Promise((resolve) => setTimeout(resolve, 400));
      });
      await page.screenshot({
        path: join(root, "qa", "screenshots", viewport.group, `${label}-${viewport.name}-${slug}.png`),
        fullPage: true
      });

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const images = Array.from(document.images);
        return {
          title: document.title,
          h1Count: document.querySelectorAll("h1").length,
          horizontalOverflow: doc.scrollWidth > doc.clientWidth + 1,
          scrollWidth: doc.scrollWidth,
          clientWidth: doc.clientWidth,
          imageCount: images.length,
          brokenImages: images.filter((img) => !img.complete || img.naturalWidth === 0).length,
          missingAltImages: images.filter((img) => !img.alt).length
        };
      });

      results.push({ target: label, viewport: viewport.name, group: viewport.group, route, url, ...metrics });
    }
    await page.close();
  }

  await browser.close();
  return results;
}

for (const group of ["desktop", "tablet", "mobile"]) {
  mkdirSync(join(root, "qa", "screenshots", group), { recursive: true });
}

let server;
try {
  if ((target === "local" || target === "both") && !noServer) {
    if (!skipBuild) {
      run(pnpm, ["build"]);
    }
    server = spawn(pnpm, ["exec", "next", "start", "-H", "127.0.0.1", "-p", "3100"], {
      cwd: root,
      env: process.env,
      stdio: "inherit"
    });
    await waitForServer(localBaseUrl);
  }

  const allResults = [];
  if (target === "local" || target === "both") {
    allResults.push(...(await capture(localBaseUrl, "local")));
  }
  if (target === "deployed" || target === "both") {
    allResults.push(...(await capture(deployedBaseUrl, "deployed")));
  }

  const failures = allResults.filter((item) => item.h1Count !== 1 || item.horizontalOverflow || item.brokenImages || item.missingAltImages);
  const summary = {
    createdAt: new Date().toISOString(),
    targets: target,
    viewports,
    routes: routes.map(([route]) => route),
    results: allResults,
    failures
  };

  writeFileSync(join(root, "qa", "screenshots", "summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify({ screenshots: allResults.length, failures }, null, 2));

  if (failures.length) {
    process.exitCode = 1;
  }
} finally {
  if (server) {
    server.kill("SIGTERM");
  }
}
