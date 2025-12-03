/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


/* eslint-disable import/no-unresolved */
/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
    plugins: [
        /* React + paths + SVG */
        react(),
        tsconfigPaths({
            projects: [resolve(__dirname, 'tsconfig.json')],
            ignoreConfigErrors: true,
        }),
        svgr({
            svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
            include: '**/resources/**/*.svg',
        }),

        /* Tailwind (build-time only) */
        tailwindcss(),

        /* ⇣ inject & DELETE css file ⇣ */
        cssInjectedByJs({
            /* When true the file that Vite puts in `dist/` is deleted
               during `closeBundle` */
            removeStyleOnBuild: true,
        }),

        /* .d.ts generation */
        dts({
            exclude: [
                '**/*.spec.{ts,tsx}',
                '**/*.stories.{ts,tsx}',
                '**/__fixtures__/**',
                '**/test-utils/**',
                '**/__snapshots__/**',
            ],
        }),
    ],

    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es', 'cjs'],
        },
        cssCodeSplit: false,
        emptyOutDir: true,
        rollupOptions: {
            external: Object.keys(peerDependencies),
        },
    },

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test-utils/vitest.setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'lcov', 'html'],
            all: true,
            reportsDirectory: 'coverage',
        },
    },
});