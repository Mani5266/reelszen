import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static, zero-JS-by-default — ships HTML+CSS, hydrates only booking island.
// ponytail: no framework runtime (react/vue) — vanilla islands keep TTI <1s on 4G.
export default defineConfig({
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  vite: { build: { cssMinify: true, minify: 'esbuild' } }
});
