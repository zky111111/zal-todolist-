// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: ['src/components'],
            dts: true,
        }),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: true,
        }),
    ],
});
