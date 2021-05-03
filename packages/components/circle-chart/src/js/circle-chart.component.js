import controller from './circle-chart.controller';
import template from './circle-chart.html';

export default {
  controller,
  template,
  bindings: {
    ariaDescription: '@?',
    ariaTitle: '@?',
    chartSubtitle: '@?',
    chartTitle: '@?',
    maxBound: '@?',
    minBound: '@?',
    segments: '=',
    withLegends: '<?',
  },
};
