import angular from 'angular';
import Tooltip from '@ovh/ui-kit.tooltip';
import Clipboard from './clipboard.component';
import ClipboardProvider from './clipboard.provider';

const moduleName = 'oui.clipboard';

angular
  .module(moduleName, [
    Tooltip,
  ])
  .component('ouiClipboard', Clipboard)
  .provider('ouiClipboardConfiguration', ClipboardProvider);

export default moduleName;
