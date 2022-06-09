import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const env = loadEnv(mode, process.cwd(), '')
//

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // outputDir: import.meta.env.NODE_ENV === 'production' ? 'dist/' : '/',
  server: {
    port: 8000
  }
})
