
// import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';


const output = [
  {
    file: 'dist-script/index.mjs',
    format: 'es',
    // banner,
    exports: "named",
    plugins:[terser({
      output: {
        comments: (node, { type, value }) => type === 'comment2' && value.includes('Author'),
      },
    })]
  },
]

export default {
  input: 'index.js',
  output,
   plugins: [
    resolve(), 
    //commonjs(),
  ],
}