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
    id: '@?',
    name: '@?',
    description: '@?',
    footer: '@?',
    value: '<',
    inline: '<?',
    thumbnail: '<?',
    disabled: '<?',
    required: '<?',
    onChange: '&?',
  },
  transclude: {
    slot: '?transcludeSlot',
    descriptionSlot: '?ouiRadioDescription',
    labelSlot: '?ouiRadioLabel',
    footerSlot: '?ouiRadioFooter',
    sectionSlot: '?ouiRadioSection',
  },
};
