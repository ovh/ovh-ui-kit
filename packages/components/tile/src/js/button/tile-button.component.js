import controller from './tile-button.controller';
import template from './tile-button.html';

export default {
  template,
  controller,
  bindings: {
    href: '@?',
    ariaLabel: '@?',
    disabled: '<?',
    external: '<?',
    onClick: '&',
  },
  transclude: true,
};
