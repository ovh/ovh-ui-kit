import angular from 'angular';
import Header from './header.component';

const moduleName = 'oui.header';

angular
  .module(moduleName, [])
  .component('ouiHeader', Header);

export default moduleName;
