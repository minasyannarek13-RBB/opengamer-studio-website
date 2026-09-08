import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const configSource = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

const expectedHeaders = [
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()"]
];

test("all public routes receive the baseline browser protection headers", () => {
  assert.match(configSource, /source:\s*"\/:path\*"/);
  for (const [key, value] of expectedHeaders) {
    assert.match(configSource, new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.ok(configSource.includes(value), `${key} must remain ${value}`);
  }
});

test("security policy stays conservative without an un-nonced CSP", () => {
  assert.doesNotMatch(configSource, /Content-Security-Policy/);
});
