import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel（ルート配信）では base='/'、GitHub Pages では '/personality-diagnosis/' を使う。
// これを取り違えると本番でJS/CSSのパスが404になり画面が真っ白になる。
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/personality-diagnosis/',
})
