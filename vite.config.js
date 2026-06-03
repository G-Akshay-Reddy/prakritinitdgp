import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [react()],
    build: {
        target: "es2020",
        cssCodeSplit: true,
        sourcemap: false,
        chunkSizeWarningLimit: 900,
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ["three", "@react-three/fiber"],
                    motion: ["framer-motion", "gsap"],
                    router: ["react-router-dom"]
                }
            }
        }
    },
    server: {
        port: 5173,
        host: "0.0.0.0"
    }
});
