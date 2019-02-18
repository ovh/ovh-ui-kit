import controller from './tooltip.controller';

export default () => ({
  restrict: 'A',
  bindToController: {
    text: '@ouiTooltip',
    title: '@?',
    placement: '@?ouiTooltipPlacement', // values: top|top-start|top-end|bottom|bottom-start|bottom-end (default: top)
  },
  controller,
  controllerAs: '$tooltipCtrl',
});
