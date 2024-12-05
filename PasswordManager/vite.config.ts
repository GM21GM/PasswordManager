import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Der Ordner, in dem alle generierten Dateien abgelegt werden
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // Haupt-HTML-Datei für deine Erweiterung
      },
      output: {
        format: 'iife', // Format für den Browser
        entryFileNames: '[name].js', // Der Name der generierten Dateien
        chunkFileNames: '[name].js' // Falls es zusätzliche Chunks gibt
      }
    }
  }
})