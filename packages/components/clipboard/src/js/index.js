import angular from 'angular';
import Clipboard from './clipboard.component';
import ClipboardProvider from './clipboard.provider';

const moduleName = 'oui.clipboard';

angular
  .module(moduleName, [])
  .component('ouiClipboard', Clipboard)
  .provider('ouiClipboardConfiguration', ClipboardProvider);

export default moduleName;
