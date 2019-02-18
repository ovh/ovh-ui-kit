import controller from './header-tabs-item.controller';
import template from './header-tabs-item.html';

export default {
  controller,
  template,
  bindings: {
    text: '@',
    href: '@?',
    state: '@?',
    stateParams: '<?',
    external: '<?',
    active: '<?',
    disabled: '<?',
  },
};
