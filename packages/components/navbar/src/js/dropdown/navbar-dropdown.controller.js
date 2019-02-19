export default class {
  constructor($element, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$timeout = $timeout;
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-navbar-dropdown')
      .addClass('oui-navbar-list__item'));
  }
}
