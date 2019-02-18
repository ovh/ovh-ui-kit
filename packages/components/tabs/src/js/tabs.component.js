import controller from './tabs.controller';
import template from './tabs.html';

export default {
  controller,
  template,
  bindings: {
    ariaLabel: '@?',
  },
  transclude: {
    item: '?ouiTabsItem',
  },
};
