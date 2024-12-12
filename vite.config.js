import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: 'components',
                replacement: resolve(__dirname, 'src/components'),
            },
            {
                find: 'contexts',
                replacement: resolve(__dirname, 'src/contexts'),
            },
            { find: 'hooks', replacement: resolve(__dirname, 'src/hooks') },
            { find: 'pages', replacement: resolve(__dirname, 'src/pages') },
            { find: 'styles', replacement: resolve(__dirname, 'src/styles') },
            { find: 'utils', replacement: resolve(__dirname, 'src/utils') },
            { find: 'layouts', replacement: resolve(__dirname, 'src/layouts') },
        ],
    },
})
