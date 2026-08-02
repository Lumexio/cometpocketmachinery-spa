# Copilot Instructions

## Stack and Commands

This is a React SPA built by Vite and deployed as static files to GitHub Pages.
Use the npm lockfile.

```bash
npm ci
npm run lint
npm run build
```

## Implementation Rules

- Add route-level views under `src/pages/` and register them in `src/App.jsx`.
- Keep navigation links in `src/components/Header.jsx` aligned with routes.
- Prefer small function components and the existing CSS files over new
  dependencies or styling systems.
- Preserve semantic HTML, keyboard access, focus visibility, and responsive
  layouts.
- Put pass-through static assets in `public/` and imported assets in
  `src/assets/`.
- Never edit `node_modules/` or generated `dist/`.

## Test and Review Expectations

There is no automated test suite. For application changes, run both Oxlint and
the production Vite build. Manually exercise changed routes at narrow and wide
viewport sizes.

## Maintenance Matrix

| When changing | Also inspect and update |
| --- | --- |
| Route or page | `src/App.jsx`, matching `src/pages/*`, `src/components/Header.jsx`, relevant footer links |
| Shared header/footer | Every route in `src/App.jsx`, responsive rules in `src/index.css`/`src/App.css` |
| Product name, URL, or download link | Page copy, header/footer links, `README.md`, and `CHANGELOG.md` |
| Static asset | Importing component or CSS, `src/assets/` versus `public/`, alt text and dimensions |
| Custom domain | `CNAME`, internal absolute links, Pages settings, `.github/workflows/node.js.yml` |
| Build or dependency command | `package.json`, `package-lock.json`, `.github/workflows/ci.yml`, `.github/workflows/copilot-setup-steps.yml`, `AGENTS.md`, `README.md` |
| Deployment behavior | `.github/workflows/node.js.yml`, SPA `404.html` fallback, `CNAME`, `AGENTS.md` |
| Contributor guidance | `AGENTS.md`, this file, `README.md`, PR template, `CHANGELOG.md` |

## Deployment Boundary

Do not replace or fold validation into `.github/workflows/node.js.yml`. It owns
GitHub Pages deployment, including the SPA fallback and custom-domain copy.
