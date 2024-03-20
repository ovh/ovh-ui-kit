import controller from '../group/radio-group.controller';

export default {
  template: `<div
    class="oui-radio-toggle-group"
    ng-class="{
      'oui-radio-toggle-group_column': $ctrl.direction === 'column',
    }"
    ng-transclude>
  </div>`,
  controller,
  bindings: {
    name: '@?',
    direction: '@?',
    dense: '@?',
    model: '=?',
    onChange: '&',
  },
  transclude: true,
};
