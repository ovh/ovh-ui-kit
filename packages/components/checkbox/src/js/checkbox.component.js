import controller from './checkbox.controller';
import template from './checkbox.html';

export default {
  template,
  controller,
  bindings: {
    model: '=?',
    id: '@?',
    name: '@?',
    description: '@?',
    footer: '@?',
    inline: '<?',
    thumbnail: '<?',
    disabled: '<?',
    required: '<?',
    onChange: '&',
  },
  transclude: {
    slot: '?transcludeSlot',
    descriptionSlot: '?ouiCheckboxDescription',
    labelSlot: '?ouiCheckboxLabel',
    footerSlot: '?ouiCheckboxFooter',
    sectionSlot: '?ouiCheckboxSection',
  },
};
