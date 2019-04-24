import Popover from './js/popover.directive';

const moduleName = 'oui.popover';

angular
  .module(moduleName, [])
  .directive('ouiPopover', Popover);

export default moduleName;
