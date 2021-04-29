import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addBooleanParameter(this, 'size');
    addBooleanParameter(this, 'compact');
    addBooleanParameter(this, 'noLabels');
    addDefaultParameter(this, 'minValue', '0');
    addDefaultParameter(this, 'maxValue', '100');
  }

  $postLink() {
    this.$timeout(() => {
      this.$element.addClass('oui-progress');

      if (this.size) {
        this.$element.addClass(`oui-progress_size-${this.size}`);
      }

      if (this.compact) {
        this.$element.addClass('oui-progress_compact');
      }

      if (this.noLabels) {
        this.$element.addClass('oui-progress_no-labels');
      }
    });
  }

  getPercentageValue(value) {
    const percent = 100;
    const { minValue } = this;
    const maxValue = Math.max(this.maxValue - this.minValue, minValue);
    const currentValue = Math.max(value - this.minValue, minValue);

    return `${(currentValue / maxValue) * percent}%`;
  }
}
