import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

let importCounter = 0;

function cacheSafeImport(relativePath) {
  importCounter += 1;
  const url = new URL(relativePath, import.meta.url);
  url.searchParams.set("test", String(importCounter));
  return import(url.href);
}

function resetEnv() {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.NEXT_PUBLIC_DEPLOYMENT_ENV;
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
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV = "preview";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, false);
});

test("production deployment becomes indexable only on canonical production URL", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_SITE_URL = "https://open-gamer.com";
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV = "production";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, true);
});

test("production deployment on a non-canonical URL stays noindex", async () => {
  resetEnv();
  process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV = "production";
  const { isIndexableProduction } = await cacheSafeImport("../lib/site.ts");
  assert.equal(isIndexableProduction, false);
});

test("public company config omits unconfirmed corporate fields", async () => {
  resetEnv();
  const { company } = await cacheSafeImport("../content/company.ts");
  assert.equal(company.email, "");
  assert.equal(company.social.length, 0);
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

test("game statuses and demo buttons are explicit", async () => {
  const { games, getGameCommercialStatusLabel, getGameDemoStatusLabel, getVerifiedDemoUrl, hasVerifiedDemo } =
    await cacheSafeImport("../content/games.ts");
  const deepDive = games.find((game) => game.slug === "deep-dive");
  const cakeBonanza = games.find((game) => game.slug === "cake-bonanza");

  assert.equal(getGameCommercialStatusLabel(deepDive), "Portfolio Title");
  assert.equal(getGameDemoStatusLabel(deepDive), "Demo Available");
  assert.equal(hasVerifiedDemo(deepDive), true);
  assert.equal(getVerifiedDemoUrl(cakeBonanza), null);
  assert.equal(getGameDemoStatusLabel(cakeBonanza), "No Public Demo");
  assert.equal(getVerifiedDemoUrl({ ...deepDive, demoUrl: "https://example.com/demo" }), null);
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
