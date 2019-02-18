export default {
  bindings: {
    placement: '@?',
  },
  controller: class {
    constructor($element, $timeout) {
      'ngInject';

      this.$element = $element;
      this.$timeout = $timeout;
    }

    $postLink() {
      this.$timeout(() => {
        this.$element
          .addClass('oui-navbar-menu')
          .addClass('oui-navbar-menu_fixed');

        if (this.placement) {
          this.$element.addClass(`oui-navbar-menu_${this.placement}`);
        }
      });
    }
  },
};
