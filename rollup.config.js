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
      {
        name: 'FileDrops',
        file: pkg.unpkg,
        format: 'umd',
        sourcemap: true
      }
    ],
    plugins: pgl()
  },
  {
    input: 'lib/index.js',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'default' },
      { file: pkg.module, format: 'es', sourcemap: true, exports: 'default' }
    ],
    plugins: pgl(),
    external: [
      'min-dom'
    ]
  }
];