import controller from './search.controller';
import template from './search.html';

export default {
  bindings: {
    model: '=',
    id: '@?',
    name: '@?',
    placeholder: '@?',
    ariaLabel: '@?',

    debounce: '<?',
    maxlength: '<?',
    minlength: '<?',
    disabled: '<?',

    onChange: '&',
    onReset: '&',
    onSubmit: '&',

    autocomplete: '<?',
    autocompleteProperty: '@?',
    autocompleteOnSelect: '&',
  },
  controller,
  template,
};
