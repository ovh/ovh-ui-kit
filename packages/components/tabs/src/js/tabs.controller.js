import find from 'lodash/find';
import first from 'lodash/first';
import isEmpty from 'lodash/isEmpty';

export default class {
  constructor($element, $scope, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  addItem(item, index) {
    // Position item in items array
    if (angular.isNumber(index)) {
      this.items.splice(index, 0, item);
    } else {
      this.items.push(item);
    }
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }

    // If was model, set first item as active
    if (this.items.length && item.id === this.model) {
      this.setActiveTab(this.items[0]);
    }
  }

  setActiveTab(item) {
    this.model = item.id;
    if (angular.isFunction(item.onActive)) {
      item.onActive();
    }
  }

  $onInit() {
    this.items = [];
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-tabs')
      .removeAttr('aria-label'));

    this.$scope.$watch(() => this.items.length, () => {
      if (!isEmpty(this.items)) {
        this.setActiveTab(find(this.items, { id: this.model }) || first(this.items));
      }
    });
  }
}
