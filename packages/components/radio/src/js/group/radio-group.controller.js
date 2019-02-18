export default class {
  constructor($scope, $element, $timeout) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => {
      this.$element
        .attr('role', 'radiogroup');
    });
  }

  $onInit() {
    if (!this.name) {
      this.name = `oui-radio-group-${this.$scope.$id}`;
    }
  }

  setModelValue(value) {
    this.model = value;

    if (this.onChange) {
      this.$timeout(() => this.onChange({ modelValue: value }));
    }
  }
}
