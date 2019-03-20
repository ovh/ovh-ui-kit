const karmaConfig = require("@ovh/ui-kit.config/src/karma.base.config");

module.exports = function (config) {
  const files = 'src/**/*.spec.js';
  karmaConfig.files.push(files);
  karmaConfig.preprocessors[files] = ['webpack', 'sourcemap'];

  config.set(karmaConfig);
};
