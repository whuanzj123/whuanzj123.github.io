// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Since you're using the main github.io domain
  build: {
    outDir: 'dist',
  },
})