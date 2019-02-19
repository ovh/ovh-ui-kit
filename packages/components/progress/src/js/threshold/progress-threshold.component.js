import controller from './progress-threshold.controller';

export default {
  controller,
  bindings: {
    value: '<',
  },
  require: {
    progressCtrl: '^^ouiProgress',
  },
};
