import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: ['chrome115']
  },
  plugins: [react(), svgr({
    svgrOptions:{},
  })],
  base: "/BASIC_kirat/Portfolio/dist"
})
