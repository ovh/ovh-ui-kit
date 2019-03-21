const karmaConfig = require("../packages/base/test/src/karma.base.config");

module.exports = function (config) {
  const files = 'packages/components/**/*.spec.js';
  karmaConfig.files.push(files);
  karmaConfig.preprocessors[files] = ['webpack', 'sourcemap'];

  config.set(karmaConfig);
};
