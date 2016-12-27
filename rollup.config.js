/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

import commonjs    from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/main.ts',
    dest: 'dist/bundle.es2015.js',
    format: 'iife',
    sourceMap: true,
    onwarn: function ( message ) {
        return;
    },
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
        // uglify()
    ]
}