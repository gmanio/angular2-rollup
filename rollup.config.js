/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

import commonjs    from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/main.ts',
    dest: 'dist/bundle.rollup.js',
    format: 'iife',
    sourceMap: false,
    moduleName: 'main',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        typescript(),
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
    ]
}