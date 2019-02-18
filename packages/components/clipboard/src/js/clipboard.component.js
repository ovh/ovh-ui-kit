import controller from './clipboard.controller';
import template from './clipboard.html';

export default {
  template,
  controller,
  bindings: {
    name: '@?',
    id: '@?',
    model: '=',
  },
};
