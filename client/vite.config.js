import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/news': 'http://localhost:3000',
      '/top-headlines': 'http://localhost:3000',
      '/country': 'http://localhost:3000'
    }
  }
})
