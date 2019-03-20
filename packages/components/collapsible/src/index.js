import angular from 'angular';

import Collapsible from './js/collapsible.component';

const moduleName = 'oui.collapsible';

angular
  .module(moduleName, [])
  .component('ouiCollapsible', Collapsible);

export default moduleName;
