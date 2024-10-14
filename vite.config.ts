import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Add this line to declare __dirname
declare const __dirname: string

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
