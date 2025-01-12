import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Port frontend
    proxy: {
      '/public': {
        target: 'http://localhost:3000', // URL backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
