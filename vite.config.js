import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mahfuz-raihan.github.io/', // Replace REPO_NAME with your GitHub repo name
  plugins: [
    react(),
  ],
})
