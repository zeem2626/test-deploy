import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "");

   return {
      // build: {
      //   manifest: true,
      //   rollupOptions: {
      //   },
      //   chunkSizeWarningLimit: 600,
      // // },
      build: {
         rollupOptions: {
            define: {},
         },
      },
      server: {
         //  proxy: {
         //     // "/api": env.VITE_PROXY,
         //     "/api": "https://youtube-r5sb.onrender.com",
         //  },

         proxy: {
            "/api": {
               target: env.VITE_API,
               changeOrigin: true,
               //  rewrite: (path) => path.replace(/^\/api/, ""),
            },
         },
      },

      plugins: [react()],
   };
});

// export default defineConfig({
//    build: {
//       rollupOptions: {
//          define: {
//             "VITE_SERVER_URL": JSON.stringify("https://your-server-url.com"), // Replace with your URL
//          },
//       },
//    },
//    plugins: [react()],
// });
