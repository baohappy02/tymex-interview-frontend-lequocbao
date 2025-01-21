import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // allows you to inspect the original CSS files and see where styles are coming from, making it easier to debug styling issues
    devSourcemap: true,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
