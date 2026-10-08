// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site lives at https://kravishan.github.io/aikaa-dev/
// For a custom domain later: set `site` to the domain and `base` to '/'.
export default defineConfig({
  site: 'https://kravishan.github.io',
  base: '/aikaa/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/styleguide/'),
    }),
  ],
});
