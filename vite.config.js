import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    babel({
      presets: [reactCompilerPreset()],
    }),
    react(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
