/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

import commonjs    from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'app/main.ts',
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
        commonjs({
            include: 'node_modules/rxjs/**',
        }),
    ]
}