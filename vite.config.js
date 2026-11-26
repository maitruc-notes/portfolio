import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  //use the below config if the defaut GitHub domain is used (portfolio is the name of the repo):
  //base: '/portfolio/',
});
