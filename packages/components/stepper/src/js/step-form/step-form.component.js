import controller from './step-form.controller';
import template from './step-form.html';

export default {
  require: {
    stepperCtrl: '^ouiStepper',
  },
  bindings: {
    id: '@?',
    name: '@?',
    header: '@',
    description: '@?',

    cancelHref: '@?',
    cancelText: '@?',
    loadingText: '@?',
    submitText: '@?',

    disabled: '<?',
    editable: '<?',
    loading: '<?',
    navigation: '<?',
    skippable: '<?',
    valid: '<?',
    position: '@?',

    preventNext: '<?',

    onCancel: '&?',
    onFocus: '&',
    onSubmit: '&',
  },
  controller,
  template,
  transclude: true,
};
