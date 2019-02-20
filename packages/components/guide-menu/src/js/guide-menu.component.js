import controller from './guide-menu.controller';
import template from './guide-menu.html';

export default {
  template,
  controller,
  require: {
    header: '?^^ouiHeader',
  },
  bindings: {
    text: '@',
    placement: '@?',
    ariaLabel: '@?',
  },
  transclude: true,
};
