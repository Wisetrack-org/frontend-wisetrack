// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Explicitly tell Vite to use PostCSS
  },
  server: {
    proxy: {
      '/predict': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
});
