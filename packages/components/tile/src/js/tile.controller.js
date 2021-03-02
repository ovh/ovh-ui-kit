import { addBooleanParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'loading');
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-tile'));
  }
}
