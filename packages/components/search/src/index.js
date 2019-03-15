import angular from 'angular';
import Autocomplete from '@ovh/ui-kit.autocomplete';
import Search from './js/search.component';

const moduleName = 'oui.search';

angular
  .module(moduleName, [
    Autocomplete,
  ])
  .component('ouiSearch', Search);

export default moduleName;
