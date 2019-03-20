import angular from 'angular';

import Numeric from './js/numeric.component';

const moduleName = 'oui.numeric';

angular
  .module(moduleName, [])
  .component('ouiNumeric', Numeric);

export default moduleName;
