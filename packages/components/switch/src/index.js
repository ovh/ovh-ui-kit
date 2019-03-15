import angular from 'angular';
import Switch from './js/switch.component';

const moduleName = 'oui.switch';

angular
  .module(moduleName, [])
  .component('ouiSwitch', Switch);

export default moduleName;
