import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const payload = {
  fullName: "Narek Minasyan",
  company: "OpenGamer",
  email: "narek@example.com",
  jobTitle: "Founder",
  companyType: "Game studio",
  serviceInterest: "Game Development",
  projectDescription: "Portfolio enquiry",
  consent: "on",
  projectStage: "Commercial review",
  website: "https://example.com",
  preferredContactMethod: "Phone",
  phone: "+374 77 000000",
  sourcePage: "/contact",
  contextParameter: "?interest=games&utm_source=audit",
  referrer: "https://example.org",
  utmSource: "audit",
  utmMedium: "external",
  utmCampaign: "final-review",
  utmContent: "homepage",
  utmTerm: "opengamer"
};

const excludedLcAppSourceAssets = [
  "/assets/projects/lc-app/lc-app-desktop-experience.webp",
  "/assets/projects/lc-app/lc-app-device-ecosystem.webp",
  "/assets/projects/lc-app/lc-app-mobile-community.webp",
  "/assets/projects/lc-app/lc-app-mobile-creator-profile.webp",
  "/assets/projects/lc-app/lc-app-mobile-discover.png",
  "/assets/projects/lc-app/lc-app-mobile-social-feed.webp"
];

function cacheSafeImport(path) {
  return import(`${path}?t=${Date.now()}-${Math.random()}`);
}

async function collectSourceFiles(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const childUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(childUrl)));
    } else if (/\.(?:[cm]?[jt]sx?|mjs)$/.test(entry.name)) {
      files.push(childUrl);
    }
  }

  return files;
}

test("Resend delivery refuses missing configuration without fetch", async () => {
  const { deliverToResend } = await cacheSafeImport("../lib/leadDelivery.ts");
  const originalFetch = globalThis.fetch;
  let called = false;
  globalThis.fetch = async () => {
    called = true;
    return new Response(null, { status: 200 });
  };

  const result = await deliverToResend(payload, {});
  globalThis.fetch = originalFetch;

  assert.equal(result.ok, false);
  assert.equal(called, false);
});

test("Resend delivery succeeds only after provider acceptance", async () => {
  const { deliverToResend, buildResendEmail } = await cacheSafeImport("../lib/leadDelivery.ts");
  const originalFetch = globalThis.fetch;
  let requestBody;
  globalThis.fetch = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return new Response(JSON.stringify({ id: "email_123" }), { status: 200 });
  };

  const config = {
    apiKey: "re_test",
    recipientEmail: "leads@example.com",
    fromEmail: "OpenGamer Website <website@example.com>"
  };
  const result = await deliverToResend(payload, config);
  const email = buildResendEmail(payload, config);
  globalThis.fetch = originalFetch;

  assert.equal(result.ok, true);
  assert.equal(requestBody.to, "leads@example.com");
  assert.equal(requestBody.from, "OpenGamer Website <website@example.com>");
  assert.equal(requestBody.reply_to, "narek@example.com");
  assert.equal(email.subject, "OpenGamer Enquiry — Game Development — OpenGamer");
  assert.match(requestBody.text, /Source Page: \/contact/);
  assert.match(requestBody.text, /Phone: \+374 77 000000/);
  assert.match(requestBody.text, /UTM Source: audit/);
  assert.match(requestBody.text, /Referrer: https:\/\/example.org/);
  assert.doesNotMatch(JSON.stringify(requestBody), /re_test/);
});

test("Resend delivery failure is not reported as success", async () => {
  const { deliverToResend } = await cacheSafeImport("../lib/leadDelivery.ts");
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(JSON.stringify({ message: "denied" }), { status: 401 });

  const result = await deliverToResend(payload, {
    apiKey: "re_test",
    recipientEmail: "leads@example.com",
    fromEmail: "OpenGamer Website <website@example.com>"
  });
  globalThis.fetch = originalFetch;

  assert.equal(result.ok, false);
});

test("Resend provider exceptions fail closed instead of throwing", async () => {
  const { deliverToResend } = await cacheSafeImport("../lib/leadDelivery.ts");
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    throw new Error("network unavailable");
  };

  const result = await deliverToResend(payload, {
    apiKey: "re_test",
    recipientEmail: "leads@example.com",
    fromEmail: "OpenGamer Website <website@example.com>"
  });
  globalThis.fetch = originalFetch;

  assert.equal(result.ok, false);
  assert.equal(result.message, "Lead delivery provider is unavailable.");
});

test("public corporate data is conditional and excludes phone/address", async () => {
  process.env.NEXT_PUBLIC_CONTACT_EMAIL = "";
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
  assert.equal(getGameDemoStatusLabel(cakeBonanza), null);
  assert.equal(getVerifiedDemoUrl({ ...deepDive, demoUrl: "https://example.com/demo" }), null);
});

test("schema source omits unconfirmed corporate fields", async () => {
  const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(layoutSource, /telephone:/);
  assert.doesNotMatch(layoutSource, /address:/);
  assert.match(layoutSource, /company\.email \? \{ email: company\.email \}/);
  assert.match(layoutSource, /company\.social\.length \? \{ sameAs:/);
});

test("public source does not regress to superseded heavy LC App assets", async () => {
  const sourceRoots = ["app/", "components/", "content/", "lib/"];
  const sourceFiles = [];
  for (const root of sourceRoots) {
    sourceFiles.push(...(await collectSourceFiles(new URL(`../${root}`, import.meta.url))));
  }

  for (const fileUrl of sourceFiles) {
    const source = await readFile(fileUrl, "utf8");
    for (const assetPath of excludedLcAppSourceAssets) {
      assert.equal(source.includes(assetPath), false, `${fileUrl.pathname} references excluded asset ${assetPath}`);
    }
  }
});

test("Vercel deployment excludes superseded heavy LC App source files", async () => {
  const ignoreSource = await readFile(new URL("../.vercelignore", import.meta.url), "utf8");
  for (const assetPath of excludedLcAppSourceAssets) {
    assert.match(ignoreSource, new RegExp(`public${assetPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
});
