import controller from './tile.controller';
import template from './tile.html';

export default {
  template,
  controller,
  bindings: {
    heading: '@?',
    description: '@?',
    loading: '<?',
  },
  transclude: true,
};
