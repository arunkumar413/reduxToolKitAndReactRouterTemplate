import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // outDir: path.resolve(__dirname, "./src"),

    html: {
      filename: "home.html",
    },
    rollupOptions: {
      // output: {
      //   assetFileNames: (assetInfo) => {
      //     let extType = assetInfo.name.split(".").at(1);
      //     if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
      //       extType = "img";
      //     }
      //     return `assets/${extType}/[name]-[hash][extname]`;
      //   },
      //   chunkFileNames: "assets/js/[name]-[hash].js",
      //   entryFileNames: "assets/js/[name]-[hash].js",
      // },
      // input: {
      //   app: "./src/index.html",
      // },
    },
  },
  plugins: [react(), ,],
});
