import { defineConfig } from "vite";

// base "./" memakai path relatif, jadi build-nya jalan di mana saja:
// Vercel (root domain) maupun GitHub Pages (subpath /nama-repo/).
export default defineConfig({
  base: "./",
});
