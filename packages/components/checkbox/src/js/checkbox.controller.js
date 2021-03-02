import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($scope, $element, $attrs, $timeout, $transclude) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    this.$timeout = $timeout;
    this.$transclude = $transclude;
  }

  hasDescription() {
    return this.$transclude.isSlotFilled('descriptionSlot') || this.description;
  }

  hasFooter() {
    if (!this.thumbnail) {
      return false;
    }

    return this.$transclude.isSlotFilled('footerSlot') || this.footer;
  }

  hasLabel() {
    const transclude = angular.element(this.$element[0].querySelector('.oui-checkbox__text')).text().trim();
    const isEmpty = !transclude.length;

    return this.$transclude.isSlotFilled('labelSlot') || !isEmpty;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'inline');
    addBooleanParameter(this, 'required');
    addBooleanParameter(this, 'thumbnail');
    addDefaultParameter(this, 'id', `ouiCheckbox${this.$scope.$id}`);
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => {
      this.$element
        .removeAttr('id')
        .removeAttr('name')
        .addClass('oui-checkbox');

      if (this.inline) {
        this.$element.addClass('oui-checkbox_inline');
      }

      if (this.thumbnail) {
        this.$element.addClass('oui-checkbox_thumbnail');
      }
    });

    this.checkboxElement = this.$element.find('input');

    // $watch is required because there is no other way
    // to be notified when the value has changed from the
    // outside
    this.$scope.$watch('$ctrl.model', (newValue) => this.updateIndeterminateState(newValue));
  }

  updateIndeterminateState(model) {
    this.checkboxElement.prop('indeterminate', model === null);
  }
}
