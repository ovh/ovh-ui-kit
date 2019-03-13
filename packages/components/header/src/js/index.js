import angular from 'angular';
import Header from './header.component';
import HeaderTabs from './tabs/index';

const moduleName = 'oui.header';

angular
  .module(moduleName, [
    HeaderTabs,
  ])
  .component('ouiHeader', Header);

export default moduleName;
