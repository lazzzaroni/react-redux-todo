import react from "@vitejs/plugin-react";
import path from "path";
import eslint from "vite-plugin-eslint";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    open: true,
  },
  base: "/react-redux-todo/",
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
