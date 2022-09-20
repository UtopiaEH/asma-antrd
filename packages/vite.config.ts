import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'asma-antrd',
            formats: ['es', 'umd'],
            fileName: (format) => `asma-antrd.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'clsx', 'antd', 'antd-mobile', 'lodash-es'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
