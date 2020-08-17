import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'loading');
    addBooleanParameter(this, 'primaryDisabled');
    addBooleanParameter(this, 'secondaryDisabled');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-modal')
        .addClass('oui-modal_shadow');

      if (this.type) {
        this.$element.addClass(`oui-modal_${this.type}`);
      }
    });
  }
}
