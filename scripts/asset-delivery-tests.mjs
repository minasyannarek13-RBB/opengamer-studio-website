import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const forbiddenLegacyAssetPaths = [
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

test("public source never references removed legacy visual assets", async () => {
  const sourceFiles = [];
  for (const root of ["app/", "components/", "content/", "lib/"]) {
    sourceFiles.push(...(await collectSourceFiles(new URL(`../${root}`, import.meta.url))));
  }

  for (const fileUrl of sourceFiles) {
    const source = await readFile(fileUrl, "utf8");
    for (const assetPath of forbiddenLegacyAssetPaths) {
      assert.equal(source.includes(assetPath), false, `${fileUrl.pathname} references removed legacy asset ${assetPath}`);
    }
  }
});

test("Vercel ignore stays limited to build and QA artifacts", async () => {
  const ignoreSource = await readFile(new URL("../.vercelignore", import.meta.url), "utf8");
  for (const staleAssetPath of forbiddenLegacyAssetPaths) {
    assert.equal(ignoreSource.includes(`public${staleAssetPath}`), false, `stale asset ignore rule remains for ${staleAssetPath}`);
  }
  assert.match(ignoreSource, /qa\/screenshots\//);
  assert.match(ignoreSource, /\.next\//);
  assert.match(ignoreSource, /node_modules\//);
});

test("game cards resolve artwork through the optimized delivery helper", async () => {
  const cardSource = await readFile(new URL("../components/sections/GameCard.tsx", import.meta.url), "utf8");
  assert.match(cardSource, /getOptimizedGameArtwork/);
  assert.match(cardSource, /const artwork = getOptimizedGameArtwork\(game\)/);
  assert.doesNotMatch(cardSource, /src=\{game\.artwork\?\.catalogue \|\| game\.image\}/);
});

test("homepage game proof derives status and artwork from the catalogue source", async () => {
  const heroSource = await readFile(new URL("../components/home/ManualHero.tsx", import.meta.url), "utf8");
  assert.match(heroSource, /games\.find/);
  assert.match(heroSource, /getVerifiedDemoUrl/);
  assert.match(heroSource, /getOptimizedGameArtwork/);
  assert.match(heroSource, /Portfolio title · No public demo/);
  assert.doesNotMatch(heroSource, /status:\s*"Playable"/);
  assert.doesNotMatch(heroSource, /image:\s*"\/assets\/games\//);
});
