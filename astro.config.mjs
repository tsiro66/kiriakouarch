// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kiriakouarch.pages.dev',
  output: 'static',
  i18n: {
    defaultLocale: 'el',
    locales: ['en', 'el'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'el', locales: { en: 'en', el: 'el-GR' } },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto Mono',
      cssVariable: '--font-roboto-mono',
      weights: [300, 400, 500, 600, 700, 800],
      subsets: ['latin', 'greek'],
    },
  ],
  vite: { plugins: [tailwindcss()] },
});
