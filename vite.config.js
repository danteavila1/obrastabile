import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      // Redirige todas las llamadas a /enviar.php al servidor de XAMPP
      "/enviar.php": "http://localhost/obrastabile/public",
    },
  },
})
