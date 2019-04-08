import angular from 'angular';

import Tooltip from '@ovh-ux/ui-kit.tooltip';

import Clipboard from './js/clipboard.component';
import ClipboardProvider from './js/clipboard.provider';

const moduleName = 'oui.clipboard';

angular
  .module(moduleName, [
    Tooltip,
  ])
  .component('ouiClipboard', Clipboard)
  .provider('ouiClipboardConfiguration', ClipboardProvider);

export default moduleName;
