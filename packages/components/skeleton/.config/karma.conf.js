const karmaConfig = require("@ovh/ui-kit.test/src/karma.base.config");

module.exports = function (config) {
  const files = 'src/index.spec.js';
  karmaConfig.files.push(files);
  karmaConfig.preprocessors[files] = ['webpack', 'sourcemap'];

  config.set(karmaConfig);
};
