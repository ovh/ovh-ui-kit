import controller from './dropdown-group.controller';
import template from './dropdown-group.html';

export default {
  template,
  controller,
  bindings: {
    label: '@',
  },
  transclude: true,
};
