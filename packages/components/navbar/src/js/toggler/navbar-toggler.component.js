import controller from './navbar-toggler.controller';
import template from './navbar-toggler.html';

export default {
  require: {
    navbarCtrl: '^^ouiNavbar',
  },
  bindings: {
    links: '<?',
    active: '<?',
    loading: '<?',
    onClick: '&',
  },
  controller,
  template,
};
