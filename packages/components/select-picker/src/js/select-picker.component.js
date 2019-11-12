import controller from './select-picker.controller';
import template from './select-picker.html';

export default {
  template,
  controller,
  transclude: {
    descriptionSlot: '?ouiSelectPickerDescription',
    footerSlot: '?ouiSelectPickerFooter',
    pictureSlot: '?ouiSelectPickerPicture',
    sectionSlot: '?ouiSelectPickerSection',
  },
  bindings: {
    model: '=?',
    id: '@?',
    name: '@?',
    label: '@',
    description: '@?',
    footer: '@?',
    placeholder: '@?',
    picture: '@?',
    match: '@',
    values: '<',
    disabled: '<?',
    required: '<?',
    onChange: '&?',
    variant: '@?',
  },
};
