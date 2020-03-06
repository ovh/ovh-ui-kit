import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

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
    const transclude = angular.element(this.$element[0].querySelector('.oui-radio__text')).text().trim();
    const isEmpty = !transclude.length;

    return this.$transclude.isSlotFilled('labelSlot') || !isEmpty;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'inline');
    addBooleanParameter(this, 'thumbnail');
    addBooleanParameter(this, 'required');
    addDefaultParameter(this, 'id', `ouiRadio${this.$scope.$id}`);

    this.group = this.radioGroup || this.radioToggleGroup;
    if (this.group) {
      this.name = this.group.name;
      this.$scope.$watch('$ctrl.group.model', (value) => {
        this.model = value;
      });
    } else {
      addDefaultParameter(this, 'name', this.id);
    }
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => {
      this.$element
        .removeAttr('id')
        .removeAttr('name')
        .addClass(this.radioToggleGroup ? 'oui-radio-toggle' : 'oui-radio');

      if (this.inline) {
        this.$element.addClass('oui-radio_inline');
      }

      if (this.thumbnail && !this.radioToggleGroup) {
        this.$element.addClass('oui-radio_thumbnail');
      }
    });
  }

  onRadioModelChange(event) {
    if (this.group) {
      this.group.setModelValue(event.modelValue);
    }

    if (this.onChange) {
      this.$timeout(() => this.onChange(event));
    }
  }
}
