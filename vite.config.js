import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./setupTests.js', '@vitest/web-worker'],
    globals: true,
    environment: 'jsdom',
  },
})
