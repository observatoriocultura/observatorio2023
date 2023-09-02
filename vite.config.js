import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/observatorio2023/'
    : '/',
  /*base:'/observatorio2023/',*/
  /*base: process.env.NODE_ENV === 'production'
    ? '/observatorio2023/'
    : '/observatorio2023/',*/
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      external: ["images/app/orfeo.png"]
    }
  }
})
