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
    // Fix for primeicons CSS import
    dedupe: ['primeicons'],
  },
  build: {
    // Enable minification (using esbuild which is faster and included by default)
    minify: 'esbuild',
    // Remove console and debugger in production
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue'],
          'vendor-primevue': ['primevue'],
          'vendor-icons': ['@iconify/vue'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize asset handling
    assetsInlineLimit: 4096,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue', 'primevue', '@iconify/vue'],
    exclude: ['primeicons'], // Exclude primeicons from optimization as it's CSS-only
  },
  // Handle CSS imports properly
  css: {
    postcss: {
      plugins: [],
    },
  },
})
