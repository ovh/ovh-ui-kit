import angular from 'angular';

import Button from './js/button.component';

const moduleName = 'oui.button';

angular
  .module(moduleName, [])
  .component('ouiButton', Button);

export default moduleName;
