import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // ✅ Netlify looks for this
  },
    force: true // Disable caching during development
})
