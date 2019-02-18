import controller from './form-actions.controller';
import template from './form-actions.html';

export default {
  template,
  controller,
  bindings: {
    submitText: '@?',
    cancelText: '@?',
    onSubmit: '&',
    onCancel: '&?',
    href: '@?',
  },
  transclude: true,
};
