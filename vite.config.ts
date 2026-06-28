// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel"
  },
  vite: {
    build: {
      target: "es2020",
      cssCodeSplit: true,
      cssMinify: true,
      chunkSizeWarningLimit: 600,
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes("node_modules/gsap")) return "gsap";
            if (id.includes("node_modules/@tanstack/react-query")) return "react-query";
            if (id.includes("src/i18n/locales/es")) return "i18n-es";
            if (id.includes("src/i18n/locales/ca")) return "i18n-ca";
            if (id.includes("src/i18n/locales/en")) return "i18n-en";
          },
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "@gsap/react", "gsap"],
    },
  },
});
