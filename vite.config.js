import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'f960-2401-4900-8848-cd56-d8db-5515-9407-230e.ngrok-free.app'
    ]
  }
})
