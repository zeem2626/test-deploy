import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "VITE_PROXY");

   return {
      // build: {
      //   manifest: true,
      //   rollupOptions: {
      //   },
      //   chunkSizeWarningLimit: 600,
      // },
      server: {
        //  proxy: {
        //     // "/api": env.VITE_PROXY,
        //     "/api": "https://youtube-r5sb.onrender.com",
        //  },
        
        proxy: {
          "/api": {
            target: "https://youtube-r5sb.onrender.com",
               changeOrigin: true,
              //  rewrite: (path) => path.replace(/^\/api/, ""),
            },
         },
      },

      plugins: [react()],
   };
});
