import { addDefaultParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addDefaultParameter(this, 'placement', this.header ? 'end' : 'start');
  }

  $postLink() {
    this.$timeout(() => this.$element
      .removeAttr('aria-label'));
  }
}
