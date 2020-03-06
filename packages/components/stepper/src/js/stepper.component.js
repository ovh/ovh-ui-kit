import controller from './stepper.controller';
import template from './stepper.html';

export default {
  bindings: {
    name: '@',
    id: '@',
    currentIndex: '=?',
    onInit: '&',
    onFinish: '&',
  },
  controller,
  template,
  transclude: true,
};
