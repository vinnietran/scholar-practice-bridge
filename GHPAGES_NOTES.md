# GitHub Pages Notes

## Stack detected
- Vite + React + TypeScript
- React Router (client-side routing)
- Tailwind CSS + shadcn/ui components

## What changed
- Added a GitHub Pages-friendly SPA redirect flow:
  - `public/404.html` redirects unknown routes to `index.html` while preserving the path.
  - `index.html` includes a small script to restore the original path for React Router.
- Set `BrowserRouter` `basename` to `import.meta.env.BASE_URL`.
- Added `VITE_BASE` support in `vite.config.ts` so assets and routes can be built for subpaths.
- Updated the 404 page to use a React Router `<Link>` for the home link.

## Local build
```bash
npm install
npm run build
```
Output goes to `dist/`.

## GitHub Pages deployment
### 1) Decide your base path
- **Project pages** (`https://username.github.io/repo-name/`):
  - Build with a base path:
    ```bash
    VITE_BASE="/repo-name/" npm run build
    ```
  - In `public/404.html`, keep `segmentCount = 1`.
- **User/organization site** (`https://username.github.io/`) or **custom domain**:
  - Build with the default base (no env needed):
    ```bash
    npm run build
    ```
  - In `public/404.html`, set `segmentCount = 0`.

### 2) Publish `dist/`
Pick one:
- **GitHub Pages UI**: upload the contents of `dist/` to the publishing branch/folder you choose.
- **gh-pages branch**: push the `dist/` contents to a `gh-pages` branch.
- **/docs folder**: copy `dist/` into `/docs` on `main` and set Pages to `/docs`.

## Routing behavior
- Uses React Router with clean URLs (`/about`, `/contact`, etc.).
- The `404.html` + `index.html` redirect flow ensures refresh/deep links work on GitHub Pages.
