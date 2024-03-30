import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import svgLoader from "vite-svg-loader";
import svgr from "vite-plugin-svgr";
import * as path from "path";

const excludeAuth = ["login"];

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    svgLoader({
      svgoConfig: {
        multipass: true,
      },
    }),
    svgr(),
    Pages({
      extendRoute(route, parent) {
        return {
          ...route,
          meta: {
            requiresAuth: !excludeAuth.includes(route.name),
          },
        };
      },
    }),
  ],
});
