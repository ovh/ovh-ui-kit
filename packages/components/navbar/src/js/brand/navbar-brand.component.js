import template from './navbar-brand.html';

export default {
  bindings: {
    heading: '@?',
    ariaLabel: '@?',
    iconAlt: '@?',
    iconClass: '@?',
    iconSrc: '@?',
    href: '@?',
  },
  controller: class {
    constructor($element, $timeout) {
      'ngInject';

      this.$element = $element;
      this.$timeout = $timeout;
    }

    $postLink() {
      this.$timeout(() => this.$element
        .removeAttr('aria-label'));
    }
  },
  template,
};
