import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'c9d9-2401-4900-884b-b264-2108-3865-6ec6-e70b.ngrok-free.app'
    ]
  }
})
