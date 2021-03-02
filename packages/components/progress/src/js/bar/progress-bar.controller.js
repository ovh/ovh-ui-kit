import { addDefaultParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';
import get from 'lodash/get';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    addDefaultParameter(this, 'type', 'info');

    this.compact = this.progressCtrl.compact;
    this.minValue = this.progressCtrl.minValue;
    this.maxValue = this.progressCtrl.maxValue;
  }

  $onChanges(changes) {
    const value = get(changes, 'value.currentValue');

    this.$timeout(() => {
      this.$element
        .attr('ariaValuenow', value);

      if (!this.compact) {
        this.$element
          .css('width', this.progressCtrl.getPercentageValue(value));
      }
    });
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-progress__bar')
        .addClass(`oui-progress__bar_${this.type}`)
        .attr('ariaValuenow', this.value)
        .attr('ariaValuemin', this.minValue)
        .attr('ariaValuemax', this.maxValue)
        .attr('role', 'progressbar');

      if (!this.compact) {
        this.$element
          .css('width', this.progressCtrl.getPercentageValue(this.value));
      }
    });
  }
}
