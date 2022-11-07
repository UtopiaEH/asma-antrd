import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(() => ({
    plugins: [
        react({
            jsxRuntime: 'automatic',
        }),
        tsConfigPaths(),
        dts({
            insertTypesEntry: true,
            include: resolve(__dirname, 'src'),
        }),
        // cssInjectedByJsPlugin({ topExecutionPriority: false, styleId: 'antrd' }),
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
            entry: [
                resolve(__dirname, 'src/index.ts'),
                resolve(__dirname, 'src/rd-components/badges/rd-badge/RdBadge.tsx'),
            ],
            name: 'asma-antrd',
            formats: ['es'],
            // formats: ['es', 'umd'],
            fileName: (format, entry) => {
                if (entry.includes('RdBadge')) {
                    return `rd-badge.${format}.js`
                }
                return `asma-antrd.${format}.js`
            },
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
