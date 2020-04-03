import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $scope, $timeout, ouiPasswordConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.translations = ouiPasswordConfiguration.translations;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.$element.find('input')[0].focus();
  }

  updateValidity(key, isValid) {
    if (isValid) {
      delete this.errors[key];
    } else {
      this.errors[key] = true;
    }

    this.valid = !Object.keys(this.errors).length;
    this.form[this.name].$setValidity('password', this.valid);
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'required');

    addDefaultParameter(this, 'id', `ouiPassword${this.$scope.$id}`);
    addDefaultParameter(this, 'name', `ouiPassword${this.$scope.$id}`);

    this.errors = {};
    this.isVisible = false;
    this.isConfirm = angular.isDefined(this.$attrs.confirm);
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .removeAttr('id')
        .removeAttr('name')
        .addClass('oui-password');

      if (this.isConfirm) {
        this.$scope.$watch(
          () => this.confirm === this.model,
          (value) => this.updateValidity('confirm', value),
        );
      }
    });
  }
}
