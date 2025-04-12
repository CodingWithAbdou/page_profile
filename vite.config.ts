import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {},
    resolve: {
        alias: {
            '@': '/H:/real-work-project/profile_two',
        },
    },
    build: {
        minify: true,
        outDir: 'dist',
        sourcemap: false,
    },
});
