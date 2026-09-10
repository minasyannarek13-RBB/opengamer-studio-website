import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import ts from "typescript";

let importCounter = 0;

async function cacheSafeImport(relativePath) {
  importCounter += 1;
  const source = await readFile(new URL(relativePath, import.meta.url), "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022
    },
    fileName: relativePath
  }).outputText;
  const encoded = Buffer.from(`${transpiled}\n//# sourceURL=${relativePath}?test=${importCounter}`).toString("base64");
  return import(`data:text/javascript;base64,${encoded}#${importCounter}`);
}

function resetEnv() {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;
  delete process.env.VERCEL_ENV;
  delete process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  delete process.env.NEXT_PUBLIC_LINKEDIN_URL;
  delete process.env.NEXT_PUBLIC_MEETING_URL;
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_RECIPIENT_EMAIL;
  delete process.env.CONTACT_FROM_EMAIL;
  delete process.env.CONTACT_REPLY_TO_DOMAIN;
  delete process.env.LEAD_WEBHOOK_URL;
  delete process.env.LEAD_WEBHOOK_SECRET;
}

test.afterEach(resetEnv);

test("production URL defaults to OpenGamer canonical URL", async () => {
  resetEnv();
  const { siteUrl, isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(siteUrl, "https://open-gamer.com");
  assert.equal(isIndexableProduction, false);
});

test("preview deployment stays noindex even if NEXT_PUBLIC_SITE_URL is production", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_SITE_URL = "https://open-gamer.com";
  process.env.VERCEL_ENV = "preview";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, false);
});

test("production deployment becomes indexable only on canonical production URL", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_SITE_URL = "https://open-gamer.com";
  process.env.VERCEL_ENV = "production";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, true);
});

test("production deployment on a non-canonical URL stays noindex", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
  process.env.VERCEL_ENV = "production";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, false);
});

test("public company config omits unconfirmed corporate fields", async () => {
  resetEnv();
  const { company } = await cacheSafeImport("../content/company.ts");
  assert.equal(company.email, "");
  assert.deepEqual(company.social, [{ label: "LinkedIn", href: "https://www.linkedin.com/company/opengamer" }]);
  assert.equal("phone" in company, false);
  assert.equal("address" in company, false);
});

test("public company config accepts only validated public values", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_CONTACT_EMAIL = "not-an-email";
  process.env.NEXT_PUBLIC_LINKEDIN_URL = "http://linkedin.com/company/opengamer";
  const invalidConfig = await cacheSafeImport("../content/company.ts");
  assert.equal(invalidConfig.company.email, "");
  assert.equal(invalidConfig.company.social.length, 0);
  assert.equal("phone" in invalidConfig.company, false);
  assert.equal("address" in invalidConfig.company, false);

  process.env.NEXT_PUBLIC_CONTACT_EMAIL = "public@example.com";
  process.env.NEXT_PUBLIC_LINKEDIN_URL = "https://www.linkedin.com/company/opengamer";
  const validConfig = await cacheSafeImport("../content/company.ts");
  assert.equal(validConfig.company.email, "public@example.com");
  assert.deepEqual(validConfig.company.social, [{ label: "LinkedIn", href: "https://www.linkedin.com/company/opengamer" }]);
});

test("game catalogue uses one explicit public status contract", async () => {
  const {
    games,
    getGameDemoStatusLabel,
    getGameStatus,
    getGameStatusLabel,
    getVerifiedDemoUrl,
    hasVerifiedDemo
  } = await cacheSafeImport("../content/games.ts");
  const deepDive = games.find((game) => game.slug === "deep-dive");
  const cakeBonanza = games.find((game) => game.slug === "cake-bonanza");

  assert.ok(deepDive);
  assert.ok(cakeBonanza);
  assert.equal(getGameStatus(deepDive), "playable");
  assert.equal(getGameStatusLabel(deepDive), "Playable");
  assert.equal(getGameDemoStatusLabel(deepDive), "Public Demo Available");
  assert.equal(hasVerifiedDemo(deepDive), true);
  assert.equal(getGameStatus(cakeBonanza), "portfolio");
  assert.equal(getGameStatusLabel(cakeBonanza), "Portfolio Title");
  assert.equal(getVerifiedDemoUrl(cakeBonanza), null);
  assert.equal(getGameDemoStatusLabel(cakeBonanza), "No Public Demo");
  assert.equal(getVerifiedDemoUrl({ ...deepDive, demoUrl: "https://example.com/demo" }), null);
  assert.equal(games.some((game) => ["demo", "request-access", "coming-soon"].includes(game.status)), false);
});

test("schema source omits unconfirmed corporate fields", async () => {
  const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(layoutSource, /telephone:/);
  assert.doesNotMatch(layoutSource, /address:/);
  assert.match(layoutSource, /company\.email \? \{ email: company\.email \}/);
  assert.match(layoutSource, /company\.social\.length \? \{ sameAs:/);
});

test("preview robots disallow crawling without advertising production sitemap", async () => {
  const robotsSource = await readFile(new URL("../app/robots.ts", import.meta.url), "utf8");
  const previewBlock = robotsSource.match(/if \(!isIndexableProduction\) \{([\s\S]*?)\n  \}/)?.[1] || "";
  assert.match(previewBlock, /disallow:\s*"\/"/);
  assert.doesNotMatch(previewBlock, /sitemap/);
});

test("internal discovery uses canonical live casino section only", async () => {
  const navigationSource = await readFile(new URL("../content/navigation.ts", import.meta.url), "utf8");
  const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");

  assert.doesNotMatch(navigationSource, /\/services\/live-casino-development/);
  assert.match(navigationSource, /\/services#live-casino/);
  assert.doesNotMatch(sitemapSource, /\/services\/live-casino-development/);
});

test("sitemap publishes primary catalogue titles and excludes internal variant records", async () => {
  const sitemapSource = await readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  assert.match(sitemapSource, /import \{ catalogueGames \} from "@\/content\/games"/);
  assert.match(sitemapSource, /catalogueGames[\s\S]*\.filter\(\(game\) => !game\.isVariant\)[\s\S]*\.map/);
  assert.doesNotMatch(sitemapSource, /const gameRoutes = games\.map/);
});
