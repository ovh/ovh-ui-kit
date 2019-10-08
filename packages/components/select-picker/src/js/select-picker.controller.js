import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import find from 'lodash/find';
import get from 'lodash/get';

export default class SelectPickerController {
  constructor($scope, $element, $attrs, $timeout, $transclude) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    this.$timeout = $timeout;
    this.$transclude = $transclude;

    this.$scope.getItemValue = (item, path) => get(item, path, '');
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'required');
    addDefaultParameter(this, 'variant', 'default');
    addDefaultParameter(this, 'id', `ouiSelectPicker${this.$scope.$id}`);

    if (this.picture) {
      this.isImgPath = /^data:/.test(this.picture) || /\.(gif|png|jpg|svg)$/.test(this.picture);
    }

    if (this.values) {
      if (this.model && find(this.values, this.model)) {
        this.selectedValue = this.model;
      } else {
        [this.selectedValue] = this.values;
      }
    }


    this.$scope.$watch(() => this.model, (newValue) => {
      if (this.model && find(this.values, newValue)) {
        this.selectedValue = newValue;
      }
    });
  }

  hasFooter() {
    return this.$transclude.isSlotFilled('footerSlot') || this.footer;
  }

  hasPicture() {
    return this.$transclude.isSlotFilled('pictureSlot') || this.picture;
  }

  hasSection() {
    return this.$transclude.isSlotFilled('sectionSlot');
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => {
      this.$element
        .addClass('oui-select-picker')
        .removeAttr('id')
        .removeAttr('name');

      this.labelElement = this.$element.find('label');
      this.labelElement.on('click', event => this.openSelectMenu(event));

      // Prevent click propagation on parent label (Safari)
      this.dropdownElement = angular.element(this.$element[0].querySelectorAll('.ui-select-match'));
      this.dropdownElement.on('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
      });

      // Avoid apply undefined class if this.variant is not already set
      if (this.variant) {
        this.$element.addClass(`oui-select-picker_${this.variant}`);
      }
    });
  }

  $onDestroy() {
    if (this.labelElement) {
      this.labelElement.off('click');
    }
  }

  getFirstValueMatch(path) {
    return get(this.values[0], path, '');
  }

  openSelectMenu(event) {
    if (this.values && this.values.length > 1 && !this.selectedValue) {
      const $button = angular.element(this.$element[0].querySelectorAll('.ui-select-match'));
      const isButtonClicked = SelectPickerController.hasParentButton(event.target);
      if (!isButtonClicked && $button.length > 0) {
        $button.triggerHandler('click');
        event.stopPropagation();
      }
    }
  }

  onSelectModelChange(event) {
    this.model = event.modelValue;
    this.onRadioModelChange(event);
  }

  onRadioModelChange(event) {
    if (this.onChange) {
      this.$timeout(() => this.onChange(event));
    }
  }

  static hasParentButton(element) {
    let currentNode = element;
    do {
      if (currentNode.nodeName === 'BUTTON') {
        return true;
      }
      currentNode = currentNode.parentNode;
    } while (currentNode.nodeName !== 'OUI-SELECT-PICKER');
    return false;
  }
}
