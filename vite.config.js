import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals: true,
    environment: "jsdom",
    setupFiles: './tests/setupTests.js',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage',
      all: true, 
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    }
  }
})
