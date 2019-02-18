export default class {
  constructor($element) {
    'ngInject';

    this.$element = $element;
  }

  $postLink() {
    this.$element.addClass('oui-sidebar-menu');
  }
}
