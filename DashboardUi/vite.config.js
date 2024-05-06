import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig ({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, '/index.html'),
        auth: resolve(__dirname, '/pages/auth/index.html'),
        dashboard: resolve(__dirname, '/pages/dashboard-home/index.html'),
        produtos: resolve(__dirname, '/pages/dashboard-produtos/index.html'),
        perfil: resolve(__dirname, '/pages/dashboard-perfil/index.html')
      }
    }
  },
})