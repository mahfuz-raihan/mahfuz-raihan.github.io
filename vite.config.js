import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // For user/organization GitHub Pages, use '/'
  plugins: [
    react(),
  ],
})
