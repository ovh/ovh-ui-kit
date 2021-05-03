import {
  addBooleanParameter,
  addDefaultParameter,
} from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs, $element, $timeout) {
    'ngInject';

    this.$attrs = $attrs; // For addBooleanParameter
    this.$element = $element;
    this.$timeout = $timeout;

    this.DEFAULT_VALUES = {
      OFFSET: 25,
    };

    this.CHART_SEGMENT_COLORS = [
      '#00185e',
      '#157eea',
      '#47fffa',
      '#008686',
      '#95d326',
      '#7cffb0',
      '#ac246f',
      '#ff4400',
      '#ffce0d',
      '#fbff47',
      '#000d9b',
      '#4d5592',
      '#bef1ff',
    ];
  }

  $onInit() {
    addDefaultParameter(this, 'chartTitle', '');
    addDefaultParameter(this, 'chartSubtitle', '');
    addDefaultParameter(this, 'ariaTitle', '');
    addDefaultParameter(this, 'ariaDescription', '');
    addDefaultParameter(this, 'minBound', 0);
    addDefaultParameter(this, 'maxBound', 100);
    addBooleanParameter(this, 'withLegends');
    addDefaultParameter(this, 'segments', []);

    this.total = 0;
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass('oui-circle-chart__container');
      this.segments = this.mergeWithCustomParameters(this.segments);
    });
  }

  mergeWithCustomParameters(segments) {
    return segments.map((segment, index) => {
      const customParameters = {
        stroke: this.getStrokeColor(index),
        'stroke-dasharray': this.getStrokeDasharray(segment.value, this.minBound, this.maxBound),
        'stroke-dashoffset': this.getStrokeDashoffset(index, this.total, this.minBound,
          this.maxBound),
      };
      this.addToTotal(segment.value);
      return { ...segment, ...customParameters };
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getSegmentStyle(segment) {
    return {
      stroke: segment.stroke,
      'stroke-dasharray': segment['stroke-dasharray'],
      'stroke-dashoffset': segment['stroke-dashoffset'],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getPercentage(value, min, max) {
    return Math.min(max, Math.max(min, (Number(value) * 100) / (max - min)));
  }

  getStrokeDasharray(value, min = this.minBound, max = this.maxBound) {
    const percent = this.getPercentage(value, min, max);
    return `${percent} ${100 - percent}`;
  }

  getStrokeDashoffset(
    index, total = this.total, minBound = this.minBound, maxBound = this.maxBound,
  ) {
    if (!index) {
      return this.DEFAULT_VALUES.OFFSET;
    }
    return 100 - this.getPercentage(total, minBound, maxBound) + this.DEFAULT_VALUES.OFFSET;
  }

  getStrokeColor(value) {
    return this.CHART_SEGMENT_COLORS[value];
  }

  addToTotal(value) {
    this.total += Number(value);
  }
}
