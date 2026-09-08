import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routeLayouts = [
  ["about", "../app/about/layout.tsx", "/about", "/assets/brand/opengamer-og.png"],
  ["contact", "../app/contact/layout.tsx", "/contact", "/assets/brand/opengamer-og.png"],
  ["services", "../app/services/layout.tsx", "/services", "/assets/brand/opengamer-og.png"],
  ["technology", "../app/technology/layout.tsx", "/technology", "/assets/brand/opengamer-og.png"],
  ["portfolio", "../app/portfolio/layout.tsx", "/portfolio", "/assets/brand/opengamer-og.png"],
  ["live casino", "../app/services/live-casino-development/layout.tsx", "/services/live-casino-development", "/assets/projects/elementals/expositions/nexus-stage.webp"]
];

for (const [name, file, url, image] of routeLayouts) {
  test(`${name} has dedicated Open Graph and Twitter preview metadata`, async () => {
    const source = await readFile(new URL(file, import.meta.url), "utf8");
    assert.match(source, new RegExp(`url:\\s*[\"']${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\"']`));
    assert.match(source, new RegExp(image.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(source, /openGraph:/);
    assert.match(source, /twitter:/);
    assert.match(source, /summary_large_image/);
  });
}

test("ELEMENTALS and LC App keep product-specific Twitter previews", async () => {
  const elementals = await readFile(new URL("../app/portfolio/elementals/layout.tsx", import.meta.url), "utf8");
  const lcApp = await readFile(new URL("../app/portfolio/lc-app/layout.tsx", import.meta.url), "utf8");
  assert.match(elementals, /nexus-stage\.webp/);
  assert.match(lcApp, /lc-app-device-ecosystem\.webp/);
  assert.match(elementals, /summary_large_image/);
  assert.match(lcApp, /summary_large_image/);
});
