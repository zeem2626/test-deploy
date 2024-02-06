import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "");

   return {
      server: {
         proxy: {
            "/api": {
               target: env.VITE_API,
               changeOrigin: true,
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
