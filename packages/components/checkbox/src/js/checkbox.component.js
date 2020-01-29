import controller from './checkbox.controller';
import template from './checkbox.html';

export default {
  template,
  controller,
  require: {
    form: '?^^form',
  },
  bindings: {
    model: '=?',
    id: '@?',
    name: '@?',
    description: '@?',
    footer: '@?',
    thumbnail: '<?',
    disabled: '<?',
    required: '<?',
    onChange: '&',
  },
  transclude: true,
};
