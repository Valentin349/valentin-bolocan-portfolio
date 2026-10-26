import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a project site, so every URL lives under the repo name.
// Use import.meta.env.BASE_URL (or the url() helper in src/lib/url.ts) for internal links.
export default defineConfig({
  site: 'https://valentin349.github.io',
  base: '/valentin-bolocan-portfolio',
  output: 'static',
  trailingSlash: 'ignore',
});
