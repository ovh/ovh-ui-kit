import controller from './numeric.controller';
import template from './numeric.html';

export default {
  template,
  controller,
  bindings: {
    id: '@?',
    name: '@?',
    model: '=',
    min: '<?',
    max: '<?',
    disabled: '<?',
    onChange: '&?',
  },
};
