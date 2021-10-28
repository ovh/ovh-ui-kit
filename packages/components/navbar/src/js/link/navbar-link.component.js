import controller from './navbar-link.controller';
import template from './navbar-link.html';

export default {
  require: {
    navbarCtrl: '^^ouiNavbar',
  },
  bindings: {
    name: '@',
    href: '@?',
    state: '@?',
    stateParams: '<?',
    label: '@?ariaLabel',
    variant: '@?',
    onClick: '&',
    external: '<?',
  },
  controller,
  template,
  transclude: true,
};
