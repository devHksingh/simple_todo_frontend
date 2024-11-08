import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   '/api': 'https://simple-todo-backend-hfsz.onrender.com/',
    // },
  },
  plugins: [react()],
})
