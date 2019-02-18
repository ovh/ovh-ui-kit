import controller from '../group/radio-group.controller';

export default {
  template: "<div ng-transclude class='oui-radio-toggle-group'></div>",
  controller,
  bindings: {
    name: '@?',
    model: '=?',
    onChange: '&',
  },
  transclude: true,
};
