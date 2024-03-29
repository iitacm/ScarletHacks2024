import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/scarlethacks/",
  plugins: [react()],

  css: {
    modules: true,
  },
})
