import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const plugins = [
    resolve(),
    commonjs(),
    typescript(),
    terser()
]
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'lib/console.esm.js',
            format: 'esm',
            sourcemap: false,
            compact: true
        },
        // {
        //     file: 'lib/console.umd.js',
        //     format: 'umd',
        //     sourcemap: false,
        //     name: 'MConsole',
        //     exports: 'named'
        // },
    ],
    plugins
}