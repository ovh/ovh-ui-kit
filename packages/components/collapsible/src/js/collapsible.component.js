import controller from './collapsible.controller';
import template from './collapsible.html';

export default {
  template,
  controller,
  bindings: {
    id: '@',
    heading: '@',
    group: '@?',
    ariaLabel: '@?',
    expanded: '<?',
    loading: '<?',
    onToggle: '&',
  },
  transclude: true,
};
