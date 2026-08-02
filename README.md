# React + Vite

[![AI Ready](https://img.shields.io/badge/AI--Ready-yes-brightgreen?style=flat)](https://github.com/johnpapa/ai-ready)

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# cometpocketmachinery-spa

## Product claim baseline

- Product domain data remains in product-owned VPS databases; Appwrite is used
  for identity only where configured.
- StockMachine publishes Windows, Linux, and Android downloads through GitHub
  Releases. Other native clients are source-only unless their product page says
  otherwise.
- Managed backups, managed-cloud durability, paid support, and cross-product
  integrations are not advertised unless implemented.

## Contributing

Create a focused branch and pull request. Install dependencies with `npm ci`,
then run `npm run lint` and `npm run build` before submitting. For route
changes, keep `src/App.jsx`, the page component, and header/footer links in
sync. Do not include generated `dist/` files.
