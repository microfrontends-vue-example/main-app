import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'main-app',
      filename: 'mainAppEntry.js',
      exposes: {
        './stores': './src/stores/index.ts'
      },
      remotes: {
        productCardApp: 'http://localhost:5002/assets/productCardEntry.js',
        cartApp: 'http://localhost:5003/assets/cartEntry.js',
        adminApp: 'http://localhost:5004/assets/adminEntry.js'
      },
      shared: ['vue', 'pinia']
    }),
  ],
  build: {
    target: 'esnext',
  }
})
