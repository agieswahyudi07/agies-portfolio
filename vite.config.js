import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ...(process.env.NODE_ENV === 'development' ? [vueDevTools()] : []),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Enable minification (using esbuild which is faster and included by default)
    minify: 'esbuild',
    // Remove console and debugger in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096,
  },
})
