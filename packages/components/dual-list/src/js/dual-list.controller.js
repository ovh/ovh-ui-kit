import get from 'lodash/get';
import remove from 'lodash/remove';

export default class {
  constructor($attrs, $element, $filter, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$filter = $filter;
    this.$timeout = $timeout;
  }

  $postLink() {
    this.$timeout(() => this.$element.addClass('oui-dual-list'));
  }

  getProperty(item) {
    return get(item, this.property, item);
  }

  moveToSource(item) {
    if (angular.isArray(this.source)) {
      remove(this.target, source => source === item);
      this.source.push(item);

      // Callbacks
      this.onChange({ item });
      this.onRemove({ item });
    }
  }

  moveAllToSource(searchQuery) {
    // Need to do a while for the callbacks
    while (angular.isArray(this.source) && this.$filter('filter')(this.target, searchQuery).length) {
      this.moveToSource(this.$filter('filter')(this.target, searchQuery)[0]);
    }
  }

  moveToTarget(item) {
    if (angular.isArray(this.target)) {
      remove(this.source, source => source === item);
      this.target.push(item);

      // Callbacks
      this.onChange({ item });
      this.onAdd({ item });
    }
  }

  moveAllToTarget(searchQuery) {
    // Need to do a while for the callbacks
    while (angular.isArray(this.target) && this.$filter('filter')(this.source, searchQuery).length) {
      this.moveToTarget(this.$filter('filter')(this.source, searchQuery)[0]);
    }
  }
}
