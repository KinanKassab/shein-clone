import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // PWA configuration
  build: {
    // increase the limit to 1000 kilobytes (1 megabyte)
    chunkSizeWarningLimit: 1000, 
    
    // Ensure service worker and manifest are included in build
    rollupOptions: {
      output: {
        // Keep service worker in root
        manualChunks: undefined,
      },
    },
  },
  // Serve service worker with correct MIME type
  server: {
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
})
