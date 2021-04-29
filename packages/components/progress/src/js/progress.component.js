import controller from './progress.controller';

export default {
  controller,
  bindings: {
    size: '@?',
    compact: '<?',
    noLabels: '<?',
    minValue: '@?',
    maxValue: '@?',
  },
};
