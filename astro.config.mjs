// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://toekneepark.github.io',
  base: '/dj-phase-site/',
  vite: {
    plugins: [tailwindcss()]
  }
});