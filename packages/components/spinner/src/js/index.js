import angular from 'angular';
import Spinner from './spinner.component';

const moduleName = 'oui.spinner';

angular
  .module(moduleName, [])
  .component('ouiSpinner', Spinner);

export default moduleName;
