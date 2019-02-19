import angular from 'angular';
import Checkbox from './checkbox.component';

const moduleName = 'oui.checkbox';

angular
  .module(moduleName, [])
  .component('ouiCheckbox', Checkbox);

export default moduleName;
