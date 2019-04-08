import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'adaptive');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element.addClass('oui-inline-adder__field');

      if (this.adaptive) {
        this.$element.addClass('oui-inline-adder__field_adaptive');
      }
    });
  }
}
