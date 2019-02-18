import controller from './criteria.controller';
import template from './criteria.html';

export default {
  bindings: {
    model: '=',
    properties: '<?',
    searchable: '<?',
    onChange: '&',
  },
  controller,
  template,
  transclude: true,
};
