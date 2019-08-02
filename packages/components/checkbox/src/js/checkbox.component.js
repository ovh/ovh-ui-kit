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
    size: '@?',
    variant: '@?',
    thumbnail: '<?',
    disabled: '<?',
    required: '<?',
    onChange: '&',
  },
  transclude: true,
};
