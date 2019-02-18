import controller from './spinner.controller';
import template from './spinner.html';

export default {
  template,
  controller,
  bindings: {
    size: '@?',
  },
};
