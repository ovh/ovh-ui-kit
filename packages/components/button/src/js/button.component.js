import controller from './button.controller';
import template from './button.html';

export default {
  bindings: {
    id: '@?',
    name: '@?',
    size: '@?',
    type: '@?',
    iconLeft: '@?',
    iconRight: '@?',
    variant: '@?',
    variantNav: '@?',
    ariaLabel: '@?',
    block: '<?',
    disabled: '<?',
    onClick: '&',
  },
  controller,
  template,
  transclude: true,
};
