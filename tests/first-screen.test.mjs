import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("first screen is rendered from vanilla JS inside a mobile shell", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const css = await readFile(new URL("assets/styles.css", root), "utf8");
  const js = await readFile(new URL("assets/app.js", root), "utf8");

  assert.match(html, /期权入门/);
  assert.match(html, /id="app"/);
  assert.match(html, /assets\/styles\.css/);
  assert.match(html, /assets\/app\.js/);
  assert.match(js, /我都能做股指期货了/);
  assert.match(js, /为什么还要学股指期权/);
  assert.match(js, /不是拿来替代期货/);
  assert.match(js, /多给你一种选择/);
  assert.match(js, /pixel-avatar/);
  assert.match(css, /max-width: 430px/);
  assert.match(css, /min-height: 100svh/);
});
