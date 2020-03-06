import controller from './textarea.controller';
import template from './textarea.html';

export default {
  template,
  controller,
  bindings: {
    model: '=?',
    id: '@?',
    name: '@?',
    placeholder: '@?',
    rows: '@?',
    disabled: '<?',
    readonly: '<?',
    minlength: '<?',
    maxlength: '<?',
    required: '<?',
    inline: '<?',
    onChange: '&?',
  },
};
