import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/prism.css',
                'resources/css/markdown.css',
                'resources/css/spotlight.css',
                'resources/ts/app.ts',
            ],
            refresh: true,
        }),
    ],
});
