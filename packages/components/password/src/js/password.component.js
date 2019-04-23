import controller from './password.controller';
import template from './password.html';

export default {
  require: {
    form: '?^^form',
  },
  bindings: {
    model: '=',
    id: '@?',
    name: '@?',
    placeholder: '@?',
    disabled: '<?',
    maxlength: '<?',
    minlength: '<?',
    pattern: '@?',
    confirm: '<?',
    required: '<?',
    onChange: '&',
  },
  controller,
  template,
  transclude: {
    ruleSlot: '?ouiPasswordRule',
    strengthSlot: '?ouiPasswordStrength',
  },
};
