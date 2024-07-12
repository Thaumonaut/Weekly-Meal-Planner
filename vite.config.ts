import {resolve} from 'path'
import { defineConfig } from 'vite'

// @type import('vite').defineConfig
export default defineConfig({
  root: "src/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        details: resolve(__dirname, "src/details/index.html"),
      }
    },
  },
  server: {
    port: 3000
  }
})