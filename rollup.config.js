import pkg from './package.json';


function pgl(plugins=[]) {
  return [
    ...plugins
  ];
}

export default [
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.exports['.'].require, format: 'cjs', sourcemap: true, exports: 'default' },
      { file: pkg.exports['.'].import, format: 'es', sourcemap: true, exports: 'default' }
    ],
    plugins: pgl(),
    external: [
      'min-dom'
    ]
  }
];