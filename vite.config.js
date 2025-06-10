import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ["massage-chair"]: resolve(__dirname, "massage-chair/index.html"),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
    viteStaticCopy({
      targets: [
        {
          src: "data", // Your actual data folder in root
          dest: "", // Copies it to the root of dist/
        },
      ],
    }),
  ],
});
