import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'block');
    addBooleanParameter(this, 'disabled');
    addDefaultParameter(this, 'type', 'button');
    addDefaultParameter(this, 'variant', 'secondary');
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .removeAttr('aria-label')
      .removeAttr('id')
      .removeAttr('name'));
  }
}
