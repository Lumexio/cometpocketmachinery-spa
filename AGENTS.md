# Comet Pocket Machinery SPA — Agent Guide

## Project Overview

This repository is the React/Vite marketing site for the Comet Pocket
Machinery product family. It is a static SPA deployed to GitHub Pages at the
domain configured by `CNAME`.

## Repository Structure

- `src/App.jsx` — application shell and route registration
- `src/pages/` — route-level pages
- `src/components/` — shared page chrome and reusable components
- `src/index.css` and `src/App.css` — global and application styles
- `public/` — assets copied as-is by Vite
- `CNAME` — production custom domain
- `.github/workflows/node.js.yml` — GitHub Pages deployment

Generated output in `dist/` and dependencies in `node_modules/` are not source.

## Build and Validation

Use the npm lockfile and run commands from the repository root:

```bash
npm ci
npm run lint
npm run build
```

Use `npm run dev` for local development. There is currently no automated test
suite; lint and production build are the required lightweight checks.

## Conventions

- Keep route declarations in `src/App.jsx` synchronized with new files in
  `src/pages/` and any navigation links in `src/components/Header.jsx`.
- Reuse the existing React component and CSS patterns; do not add another UI or
  routing framework for a single feature.
- Preserve responsive behavior and accessible labels, focus states, and
  semantic headings.
- Keep deployable static assets in `public/`; imported component assets belong
  under `src/assets/`.
- Do not hardcode a replacement production domain. Domain changes require
  coordinated updates to `CNAME`, links, and the Pages workflow.

## CI/CD

Pull requests run `.github/workflows/ci.yml`. Pushes to the default branch are
deployed by `.github/workflows/node.js.yml`, which also creates the SPA
`404.html` fallback and preserves `CNAME`.

## Adding a Page

1. Create the page component in `src/pages/`.
2. Register its route in `src/App.jsx`.
3. Add or update navigation in `src/components/Header.jsx` when user-facing.
4. Check footer and marketing links for consistency.
5. Run `npm run lint && npm run build`.

## Documentation Status

Project commands and contribution steps are in `README.md`; agent-specific
architecture and maintenance rules live here and in
`.github/copilot-instructions.md`.

## Common Pitfalls

- GitHub Pages must retain the `dist/404.html` SPA fallback.
- Do not edit or commit generated `dist/` output as part of source changes.
- Do not replace the existing deployment workflow when adding validation.
