import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
 plugins: [react(),tailwindcss(),],
 server:{
   port:5005,
   proxy:{
     '/api':{
       target:'http://localhost:4006/',
       changeOrigin:true,
       rewrite:(path)=>path.replace(/^\/api/,''),
     },
   },
 },
})
