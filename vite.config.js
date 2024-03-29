import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ScarletHacks2024/",
  plugins: [react()],

  css: {
    modules: true,
  },
})
