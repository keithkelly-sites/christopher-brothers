import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://christopher-brothers.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-display',
      weights: [400, 600, 700, 900],
      styles: ['normal'],
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Source Sans 3',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
