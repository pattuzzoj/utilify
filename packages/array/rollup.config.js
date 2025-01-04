import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'es',
        compact: false
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        compact: false
      },
    ],
    plugins: [
      resolve({ extensions: ['.js', '.ts'] }),
      terser(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        noEmit: false,
      }),
      babel({ babelHelpers: 'bundled', extensions: ['.js', '.ts'] }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
];
