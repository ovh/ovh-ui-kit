export default class {
  constructor($element, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$timeout = $timeout;
  }

  addItem(item, index) {
    // Position item in items array
    if (angular.isNumber(index)) {
      this.items.splice(index, 0, item);
    } else {
      this.items.push(item);
    }

    // Set first added tab active
    if (this.items.length === 1) {
      this.setActiveTab(item);
    }
  }

  removeItem(item) {
    const index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }

    // If was activeId, set first item as active
    if (this.items.length && item.id === this.activeId) {
      this.setActiveTab(this.items[0]);
    }
  }

  setActiveTab(item) {
    this.activeId = item.id;
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
  }
}
