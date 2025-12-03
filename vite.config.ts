import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-placeholder-image',
      // Manual copy hook to ensure the file exists in dist since we are not importing it
      closeBundle() {
        try {
          if (fs.existsSync('imageplaceholder.jpg')) {
            const dest = 'dist/imageplaceholder.jpg';
            // Ensure dist exists (it should after build)
            if (!fs.existsSync('dist')) {
               fs.mkdirSync('dist');
            }
            fs.copyFileSync('imageplaceholder.jpg', dest);
            console.log(`[vite.config] Copied imageplaceholder.jpg to ${dest}`);
          } else {
             console.warn('[vite.config] Warning: imageplaceholder.jpg not found in root.');
          }
        } catch (e) {
          console.error('[vite.config] Failed to copy image:', e);
        }
      }
    }
  ],
  base: './', // Use relative paths for assets to work on GitHub Pages subdirectories
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});