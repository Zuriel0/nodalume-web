import test from "node:test";
import assert from "node:assert/strict";
import { copy } from "../src/content.js";
import { story } from "../src/product-story.js";
import { growth } from "../src/data-growth.js";
import { productVideos } from "../src/product-videos.js";
import { readdirSync, statSync } from "node:fs";

test("EN/ES expose the same complete content structure and stable anchors", () => {
  const shape = (value) =>
    Array.isArray(value)
      ? value.map(shape)
      : value && typeof value === "object"
        ? Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, shape(item)]),
          )
        : typeof value;
  assert.deepEqual(shape(copy.es), shape(copy.en));
  for (const locale of Object.values(copy)) {
    assert.deepEqual(
      locale.map.map((item) => item.id),
      ["builder", "connections", "creative-system", "future"],
    );
    assert.deepEqual(
      locale.map.map((item) => item.kind),
      ["current", "partial", "concept", "future"],
    );
    assert.equal(
      new Set(locale.map.map((item) => item.id)).size,
      locale.map.length,
    );
    for (const item of locale.map) assert.ok(item.detail.length > 100, item.id);
  }
});

const luminance = (hex) => {
  const values = hex
    .match(/[a-f0-9]{2}/gi)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) =>
      value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
    );
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
};
test("all designed foreground/background text pairs meet WCAG AA", () => {
  for (const [foreground, background] of [
    ["111111", "F7F7F4"],
    ["555550", "F7F7F4"],
    ["FFFFFF", "5E46FF"],
    ["111111", "C8FF5E"],
    ["CDCDC7", "111111"],
    ["C8FF5E", "5E46FF"],
    ["C8FF5E", "111111"],
  ]) {
    const [a, b] = [luminance(foreground), luminance(background)].sort(
      (x, y) => y - x,
    );
    assert.ok((a + 0.05) / (b + 0.05) >= 4.5, `${foreground}/${background}`);
  }
});

test("product demonstrations have bilingual descriptions and stable anchors", () => {
  const shape = (value) =>
    Array.isArray(value)
      ? value.map(shape)
      : value && typeof value === "object"
        ? Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, shape(item)]),
          )
        : typeof value;
  assert.deepEqual(shape(story.es), shape(story.en));
  for (const locale of Object.values(story)) {
    assert.deepEqual(
      locale.slots.map((slot) => slot.id),
      ["demo-builder", "demo-inspector", "demo-responsive"],
    );
    for (const slot of locale.slots) {
      assert.ok(slot.alternative?.trim(), `${slot.id}: text alternative`);
      assert.ok(productVideos[slot.id], `${slot.id}: approved recording`);
    }
  }
});

test("growth narrative preserves bilingual scope and ordered journey", () => {
  const shape = (value) =>
    Array.isArray(value)
      ? value.map(shape)
      : value && typeof value === "object"
        ? Object.fromEntries(
            Object.entries(value).map(([key, item]) => [key, shape(item)]),
          )
        : typeof value;
  assert.deepEqual(shape(growth.es), shape(growth.en));
  for (const [lang, locale] of Object.entries(growth)) {
    assert.deepEqual(
      locale.stages.map((stage) => stage.id),
      ["connect", "understand", "analyze", "grow"],
    );
    assert.equal(locale.signalLabels.length, 4);
    assert.equal(locale.scope.length, 4);
    assert.equal(copy[lang].nav.length, 5);
    assert.ok(locale.concept.trim());
    for (const item of [...locale.stages, ...locale.scope])
      assert.ok(item.title.trim() && item.body.trim());
  }
});

test("public media contains only the three owner-approved demonstrations", () => {
  const expected = ["portal-builder", "inspector", "responsive"]
    .flatMap((slug) => [`${slug}.mp4`, `${slug}.webp`])
    .sort();
  assert.deepEqual(
    readdirSync(new URL("../public/media/", import.meta.url)).sort(),
    expected,
  );
  assert.equal(Object.keys(productVideos).length, 3);
  for (const asset of Object.values(productVideos)) {
    for (const path of [asset.src, asset.poster]) {
      assert.match(path, /^\/media\/[a-z-]+\.(mp4|webp)$/);
      assert.ok(
        statSync(new URL(`../public${path}`, import.meta.url)).size > 0,
      );
    }
  }
});
