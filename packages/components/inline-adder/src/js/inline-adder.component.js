import controller from './inline-adder.controller';
import template from './inline-adder.html';

export default {
  bindings: {
    id: '@?',
    name: '@?',
    onAdd: '&',
    onChange: '&',
    onRemove: '&',
    tooltipAdd: '@?',
    tooltipDelete: '@?',
    rowsLimit: '<?',
  },
  controller,
  template,
  transclude: true,
};
