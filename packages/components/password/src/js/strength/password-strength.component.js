import controller from './password-strength.controller';
import template from './password-strength.html';

export default {
  require: {
    password: '^ouiPassword',
  },
  bindings: {
    label: '@?',
    score: '<?',
  },
  controller,
  template,
  transclude: true,
};
