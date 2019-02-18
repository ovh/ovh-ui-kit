import controller from './inline-adder.controller';
import template from './inline-adder.html';

export default {
  bindings: {
    id: '@?',
    name: '@?',
    onAdd: '&',
    onChange: '&',
    onRemove: '&',
  },
  controller,
  template,
  transclude: true,
};
