import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const layoutSource = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");

test("localized routes set the document language before body content", () => {
  assert.match(layoutSource, /location\.pathname\.split\('\/'\)\[1\]/);
  for (const locale of ["en", "ru", "hy", "es", "pt"]) {
    assert.match(layoutSource, new RegExp(`['\"]${locale}['\"]`));
  }
  assert.match(layoutSource, /document\.documentElement\.lang = locale/);
  assert.match(layoutSource, /<head>[\s\S]*localeBootstrapScript[\s\S]*<\/head>/);
});

test("organization schema uses the canonical configured logo asset", () => {
  assert.match(layoutSource, /import \{ company, logoAsset \} from "@\/content\/company"/);
  assert.match(layoutSource, /logo: `\$\{siteUrl\}\$\{logoAsset\.src\}`/);
  assert.doesNotMatch(layoutSource, /logo: `\$\{siteUrl\}\/assets\/brand\/opengamer-logo\.png`/);
});
