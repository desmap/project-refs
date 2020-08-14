import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'

module.exports = {
  input: 'p2/index.ts',
  output: {
    file: 'p2.mjs',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [json(), resolve(), cjs(), ts()],
}
