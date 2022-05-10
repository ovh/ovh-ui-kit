import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'external');
    addBooleanParameter(this, 'top');

    if (this.top) {
      this.linkTarget = '_top';
    } else if (this.external) {
      this.linkTarget = '_blank';
      this.linkRel = 'noopener';
    }
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .addClass('oui-tile__item oui-tile__item_button'));
  }
}
