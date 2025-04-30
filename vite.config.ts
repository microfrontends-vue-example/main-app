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
        productCardApp: 'https://product-card-app-ashen.vercel.app/assets/productCardEntry.js',
        cartApp: 'https://cart-app-six-omega.vercel.app/assets/cartEntry.js',
        adminApp: 'https://admin-app-silk.vercel.app/assets/adminEntry.js'
      },
      shared: ['vue', 'pinia']
    }),
  ],
  build: {
    target: 'esnext',
  }
})
