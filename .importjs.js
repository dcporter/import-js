module.exports = [
  {
    environments: ['node'],
    ignorePackagePrefixes: ['lodash.'],
    logLevel: 'debug',
    excludes: [
      './build/**',
      './lib/__mocks__/**'
    ]
  },
  {
    appliesTo: 'lib/__tests__/**',
    importDevDependencies: true
  },
  {
    appliesTo: 'lib/benchmark.js',
    importDevDependencies: true
  }
]
