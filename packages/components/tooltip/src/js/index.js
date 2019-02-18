import angular from 'angular';
import Tooltip from './tooltip.directive';

const moduleName = 'oui.tooltip';

angular
  .module(moduleName, [])
  .directive('ouiTooltip', Tooltip);

export default moduleName;
