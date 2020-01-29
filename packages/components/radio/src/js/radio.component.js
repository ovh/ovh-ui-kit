import controller from './radio.controller';
import template from './radio.html';

export default {
  require: {
    radioGroup: '?^ouiRadioGroup',
    radioToggleGroup: '?^ouiRadioToggleGroup',
  },
  template,
  controller,
  bindings: {
    model: '=?',
    description: '@?',
    footer: '@?',
    id: '@?',
    name: '@?',
    value: '<',
    thumbnail: '<?',
    disabled: '<?',
    required: '<?',
    onChange: '&?',
  },
  transclude: true,
};
