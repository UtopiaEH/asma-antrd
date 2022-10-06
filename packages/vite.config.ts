import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            insertTypesEntry: true,
            include: resolve(__dirname, 'src'),
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    build: {
        sourcemap: true,
        manifest: true,
        minify: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'asma-antrd',
            formats: ['es', 'umd'],
            fileName: (format) => `asma-antrd.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
}))
