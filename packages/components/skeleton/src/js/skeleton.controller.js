import { addBooleanParameter, addDefaultParameter } from '@ovh/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addDefaultParameter(this, 'size', 'auto');
    addBooleanParameter(this, 'randomized');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element.addClass(`oui-skeleton oui-skeleton_${this.size}`);

      if (this.randomized) {
        // Needed for eslint
        const minWidth = 30;
        const maxWidth = 100;
        const randomWidth = Math.round((Math.random() * (maxWidth - minWidth)) + minWidth);

        this.$element.css('width', `${randomWidth}%`);
      }
    });
  }
}
