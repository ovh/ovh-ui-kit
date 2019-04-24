import Tooltip from './js/tooltip.directive';

const moduleName = 'oui.tooltip';

angular
  .module(moduleName, [])
  .directive('ouiTooltip', Tooltip);

export default moduleName;
