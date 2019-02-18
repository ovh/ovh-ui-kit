import controller from './radio-group.controller';

export default {
  template: '<ng-transclude></ng-transclude>',
  controller,
  bindings: {
    name: '@?',
    model: '=?',
    onChange: '&',
  },
  transclude: true,
};
