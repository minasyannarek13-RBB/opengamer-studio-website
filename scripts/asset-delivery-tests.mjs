import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const excludedPublicAssets = [
  "/assets/projects/lc-app/lc-app-desktop-experience.webp",
  "/assets/projects/lc-app/lc-app-device-ecosystem.webp",
  "/assets/projects/lc-app/lc-app-mobile-community.webp",
  "/assets/projects/lc-app/lc-app-mobile-creator-profile.webp",
  "/assets/projects/lc-app/lc-app-mobile-discover.png",
  "/assets/projects/lc-app/lc-app-mobile-social-feed.webp",
  "/assets/games/cake-bonanza/artwork.jpg",
  "/assets/games/choco-boom/source.jpg",
  "/assets/games/deep-dive/source.jpg",
  "/assets/games/dragon-fruits/artwork.jpg",
  "/assets/games/dragon-rush/artwork.jpg",
  "/assets/games/forest-fortune/artwork.jpg",
  "/assets/games/fruit-elixir/source.jpg",
  "/assets/games/goblin-gems/artwork.jpg",
  "/assets/games/passion-paradise/source.jpg",
  "/assets/games/royal-fruits/artwork.jpg",
  "/assets/games/sweet-wins/artwork.jpg"
];

const homepageLegacyArtwork = [
  "/assets/games/forest-fortune/source.jpg",
  "/assets/games/deep-dive/artwork.jpg",
  "/assets/games/choco-boom/artwork.jpg"
];

async function collectSourceFiles(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const childUrl = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directoryUrl);
    if (entry.isDirectory()) files.push(...(await collectSourceFiles(childUrl)));
    else if (/\.(?:[cm]?[jt]sx?|mjs)$/.test(entry.name)) files.push(childUrl);
  }
  return files;
}

test("public source never references deployment-excluded visual assets", async () => {
  const sourceFiles = [];
  for (const root of ["app/", "components/", "content/", "lib/"]) {
    sourceFiles.push(...(await collectSourceFiles(new URL(`../${root}`, import.meta.url))));
  }

  for (const fileUrl of sourceFiles) {
    const source = await readFile(fileUrl, "utf8");
    for (const assetPath of excludedPublicAssets) {
      assert.equal(source.includes(assetPath), false, `${fileUrl.pathname} references excluded asset ${assetPath}`);
    }
  }
});

test("Vercel ignore contract includes every deployment-excluded visual asset", async () => {
  const ignoreSource = await readFile(new URL("../.vercelignore", import.meta.url), "utf8");
  for (const assetPath of excludedPublicAssets) {
    assert.match(ignoreSource, new RegExp(`public${assetPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
  }
});

test("game cards resolve artwork through the optimized delivery helper", async () => {
  const cardSource = await readFile(new URL("../components/sections/GameCard.tsx", import.meta.url), "utf8");
  assert.match(cardSource, /getOptimizedGameArtwork/);
  assert.match(cardSource, /const artwork = getOptimizedGameArtwork\(game\)/);
  assert.doesNotMatch(cardSource, /src=\{game\.artwork\?\.catalogue \|\| game\.image\}/);
});

test("homepage showcase uses optimized game artwork where WebP variants exist", async () => {
  const homepageSource = await readFile(new URL("../content/studioHomepage.ts", import.meta.url), "utf8");
  for (const assetPath of homepageLegacyArtwork) {
    assert.equal(homepageSource.includes(assetPath), false, `homepage references legacy artwork ${assetPath}`);
  }
  assert.match(homepageSource, /\/assets\/games\/forest-fortune\/artwork\.webp/);
  assert.match(homepageSource, /\/assets\/games\/deep-dive\/artwork\.webp/);
  assert.match(homepageSource, /\/assets\/games\/choco-boom\/artwork\.webp/);
});
