import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function cacheSafeImport(path) {
  return import(`${path}?t=${Date.now()}-${Math.random()}`);
}

test("localized compatibility routes do not leak into launch navigation", async () => {
  const { getLocalizedHomePath } = await cacheSafeImport("../lib/routes.ts");
  assert.equal(getLocalizedHomePath("ru", "/"), "/");
  assert.equal(getLocalizedHomePath("hy", "/"), "/");
  assert.equal(getLocalizedHomePath("es", "/about"), "/about");
  assert.equal(getLocalizedHomePath("pt", "/contact"), "/contact");
  assert.equal(getLocalizedHomePath("ru", "/portfolio/elementals"), "/portfolio/elementals");
});

test("header and footer links do not manufacture localized redirect URLs", async () => {
  const headerSource = await readFile(new URL("../components/layout/Header.tsx", import.meta.url), "utf8");
  const footerSource = await readFile(new URL("../components/layout/Footer.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(headerSource, /getLocalizedPath\(locale,/);
  assert.match(headerSource, /getLocalizedHomePath\(locale, "\/"\)/);
  assert.doesNotMatch(headerSource, /getLocalizedPath\(locale, resolvedCtaHref\)/);
  assert.match(headerSource, /getLocalizedHomePath\(locale, resolvedCtaHref\)/);
  assert.doesNotMatch(footerSource, /getLocalizedPath\(locale, "\/contact"\)/);
  assert.match(footerSource, /getLocalizedHomePath\(locale, "\/contact"\)/);
});
