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
        ["tennis-snooker-game"]: resolve(
          __dirname,
          "tennis-snooker-game/index.html"
        ),
        ["commercial-equipment"]: resolve(
          __dirname,
          "commercial-equipment/index.html"
        ),
        ["exercise-bike"]: resolve(__dirname, "exercise-bike/index.html"),
        ["dumbbells-bench"]: resolve(__dirname, "dumbbells-bench/index.html"),
        ["slimming-abdominal-machines"]: resolve(
          __dirname,
          "slimming-abdominal-machines/index.html"
        ),
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
