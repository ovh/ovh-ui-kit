import controller from './dropdown-item.controller';
import template from './dropdown-item.html';

export default {
  controller,
  template,
  bindings: {
    ariaLabel: '@?',
    href: '@?',
    state: '@?',
    stateParams: '<?',
    disabled: '<?',
    external: '<?',
    onClick: '&',
  },
  transclude: true,
};
