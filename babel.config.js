module.exports = function babelConfig(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        { useBuiltIns: 'usage' },
      ],
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime',
      'babel-plugin-angularjs-annotate',
      'babel-plugin-lodash',
    ],
    comments: false,
    env: {
      test: {
        plugins: ['babel-plugin-istanbul'],
      },
    },
  };
};
