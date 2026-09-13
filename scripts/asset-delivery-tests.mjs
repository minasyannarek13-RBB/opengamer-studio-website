import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
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

const approvedPortfolioArtwork = new Map([
  ["captain-boom", "/assets/games/captain-boom/artwork-inline-small.svg"],
  ["nuclear-blast", "/assets/games/nuclear-blast/artwork.svg"],
  ["wars-of-the-gods", "/assets/games/wars-of-the-gods/artwork.svg"],
  ["goblin-gems", "/assets/games/goblin-gems/artwork.webp"],
  ["royal-fruits", "/assets/games/royal-fruits/artwork.webp"]
]);

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

test("every canonical game artwork path exists in public", async () => {
  const catalogueSource = await readFile(new URL("../content/games.ts", import.meta.url), "utf8");
  const imagePaths = [...catalogueSource.matchAll(/\bimage:\s*"(\/assets\/games\/[^\"]+)"/g)].map((match) => match[1]);

  assert.ok(imagePaths.length > 0, "no canonical game artwork paths were discovered");

  for (const assetPath of new Set(imagePaths)) {
    const publicFileUrl = new URL(`../public${assetPath}`, import.meta.url);
    await assert.doesNotReject(() => access(publicFileUrl), `canonical game artwork is missing: ${assetPath}`);
  }
});

test("founder-approved portfolio artwork mappings stay pinned", async () => {
  const catalogueSource = await readFile(new URL("../content/games.ts", import.meta.url), "utf8");

  for (const [slug, assetPath] of approvedPortfolioArtwork) {
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedAssetPath = assetPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const recordPattern = new RegExp(`slug:\\s*"${escapedSlug}"[^\\n]+image:\\s*"${escapedAssetPath}"`);
    assert.match(catalogueSource, recordPattern, `${slug} must keep its approved visible artwork mapping`);
    await assert.doesNotReject(
      () => access(new URL(`../public${assetPath}`, import.meta.url)),
      `${slug} approved artwork file is missing: ${assetPath}`
    );
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

test("homepage game proof derives selection, status and artwork from catalogue helpers", async () => {
  const heroSource = await readFile(new URL("../components/home/ManualHero.tsx", import.meta.url), "utf8");
  const selectorSource = await readFile(new URL("../lib/gameShowcase.ts", import.meta.url), "utf8");

  assert.match(heroSource, /getBalancedGameShowcase/);
  assert.match(heroSource, /getGameStatus/);
  assert.match(heroSource, /getVerifiedDemoUrl/);
  assert.match(heroSource, /getOptimizedGameArtwork\(game\)/);
  assert.match(heroSource, /Portfolio title · No public demo/);
  assert.match(selectorSource, /playableGames/);
  assert.match(selectorSource, /portfolioGames/);
  assert.doesNotMatch(heroSource, /selectedGameSlugs/);
  assert.doesNotMatch(heroSource, /status:\s*"Playable"/);
  assert.doesNotMatch(heroSource, /image:\s*"\/assets\/games\//);
});
