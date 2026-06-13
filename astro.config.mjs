import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kiriakouarch.pages.dev',
  output: 'static',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto Mono',
      cssVariable: '--font-roboto-mono',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'greek'],
      display: 'swap',
    },
  ],
  vite: { plugins: [tailwindcss()] },
});