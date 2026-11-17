// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Cambia SITE si el portafolio se mueve a otro dominio (también en public/robots.txt).
export const SITE = 'https://portafolio-one-wine-20.vercel.app';

export default defineConfig({
  site: SITE,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en-US', fr: 'fr-FR' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
