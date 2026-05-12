# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Modern JavaScript (ES2025) library that parses URL query parameters into a plain object. Source is written as an ES module; the webpack build transpiles it via Babel to a UMD bundle (`dist/`) that runs on any browser. Exposes `parseUrlParams(url)` as a named export; omitting `url` falls back to `globalThis.location?.href`.

## Commands

```bash
npm install           # install deps

npm test              # run Vitest tests (single run)
npm run test:watch    # run Vitest in watch mode

npm run build         # webpack → dist/urlParser.js (UMD, browser-compatible)
```

## Code Structure

- **`src/urlParser.js`** — entire library; named export `parseUrlParams`, default export `{ parseUrlParams }` consumed by the UMD bundle
- **`test/urlParser.test.js`** — Vitest specs
- **`webpack.config.js`** — bundles `src/urlParser.js` → `dist/urlParser.js` as UMD via Babel for broad browser support
- **`babel.config.json`** — `@babel/preset-env` targeting `> 0.25%, not dead` with `modules: false` (webpack handles module bundling)
- **`dist/urlParser.js`** — generated UMD bundle; exposes `urlParser` global in browsers (gitignored)
- **`examples/examples.js`** — usage examples as an ES module (not part of the test suite)
