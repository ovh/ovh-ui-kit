import controller from './field.controller';
import template from './field.html';

export default {
  bindings: {
    label: '@?',
    helpText: '@?',
    size: '@?',
    errorMessages: '<?',
    labelPopover: '@?',
    labelPopoverSize: '@?',
    forceErrorDisplay: '<?',
    inline: '<?',
  },
  controller,
  require: {
    form: '?^^form',
  },
  template,
  transclude: true,
};
