import angular from 'angular';

import Autocomplete from './js/autocomplete.directive';
import AutocompleteHightlight from './js/filter/autocomplete-highlight.filter';
import AutocompleteProvider from './js/autocomplete.provider';

const moduleName = 'oui.autocomplete';

angular
  .module(moduleName, [])
  .directive('ouiAutocomplete', Autocomplete)
  .filter('ouiAutocompleteHightlight', AutocompleteHightlight)
  .provider('ouiAutocompleteConfiguration', AutocompleteProvider);

export default moduleName;
