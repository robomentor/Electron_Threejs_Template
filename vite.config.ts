import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import electron from "vite-plugin-electron";
import electronRenderer from "vite-plugin-electron/renderer";
import polyfillExports from "vite-plugin-electron/polyfill-exports";

export default defineConfig({
    plugins: [
        vue(),
        electron({
            main: {
                entry: "src/main/index.ts"
            },
            preload: {
                input: [path.join(__dirname, "./src/preload/preload.ts"), path.join(__dirname, "./src/preload/webview.ts")]
            },
        }),
        electronRenderer(),
        polyfillExports()
    ],
    build: {
        outDir: "release/dist",
        emptyOutDir: false
    }
})
