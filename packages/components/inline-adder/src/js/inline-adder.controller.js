import { addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import filter from 'lodash/filter';

export default class {
  constructor($attrs, $element, $scope, $timeout, ouiInlineAdderConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.translations = ouiInlineAdderConfiguration.translations;
  }

  $onInit() {
    this.forms = [true];
    this.isDisabled = [false];

    addDefaultParameter(this, 'id', `ouiInlineAdderForm${this.$scope.$id}`);
    addDefaultParameter(this, 'name', `ouiInlineAdderForm${this.$scope.$id}`);
  }

  $postLink() {
    this.$timeout(() => this.$element.addClass('oui-inline-adder'));
  }

  onFormsChange() {
    // Filter boolean values used for ngShow
    const forms = filter(this.forms, item => angular.isObject(item));
    this.onChange({ forms });
  }

  onFormSubmit(form, index) {
    if (form.$valid) {
      this.forms[index] = form;

      // Create new instance of form
      this.isDisabled[index] = true;
      this.forms.push(true);

      // Callbacks
      this.onAdd({ form });
      this.onFormsChange();
    }
  }

  onFormRemove(form, index) {
    // Hide removed form to avoid refreshing ngRepeat
    this.forms[index] = false;

    // Callback
    this.onRemove({ form });
    this.onFormsChange();
  }
}
