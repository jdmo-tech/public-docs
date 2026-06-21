# My App Docs

Documentation site built with [VitePress](https://vitepress.dev), deployed to GitHub Pages via GitHub Actions.

## For the team — editing docs

All docs live in the `docs/` folder as Markdown files. To add or edit a page:

1. Edit or create a `.md` file in `docs/guide/`
2. If it's a new page, add it to the sidebar in `docs/.vitepress/config.js`
3. Push to `main` — the site rebuilds and deploys automatically

## Running locally

```bash
npm install
npm run docs:dev
```

Visit http://localhost:5173

## Project structure

```
docs/
├── .vitepress/
│   └── config.js        ← nav, sidebar, site settings
├── guide/
│   ├── introduction.md
│   ├── installation.md
│   ├── configuration.md
│   └── faq.md
└── index.md             ← homepage
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

Make sure GitHub Pages is set to **GitHub Actions** as the source under Settings → Pages.
