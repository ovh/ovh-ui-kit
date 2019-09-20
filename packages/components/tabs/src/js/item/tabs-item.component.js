import controller from './tabs-item.controller';
import template from './tabs-item.html';

export default {
  require: {
    tabsCtrl: '^ouiTabs',
  },
  bindings: {
    id: '@?',
    heading: '@?',
    subheading: '@?',
    promotion: '<?',
    ariaLabel: '@?',
    checked: '<?',
    onActive: '&',
  },
  controller,
  template,
  transclude: true,
};
