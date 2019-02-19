import data from '../data/chips.data.json';

export default class {
  $onInit() {
    this.items = angular.copy(data.items);
    this.itemsValue = angular.copy(data.items);
  }

  addItem() {
    this.itemsValue.push({
      title: 'Lorem ipsum',
      foo: 'bar',
    });
  }

  onRemove(items, removed) {
    this.changedValue = items;
    this.removedValue = removed;
  }
}
