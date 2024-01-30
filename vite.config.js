import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/github-wrapper/",
  build: {
    rollupOptions: {
      external: ['lucide-react'],
    },
  },
})
