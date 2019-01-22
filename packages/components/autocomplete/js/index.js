import angular from "angular";
import Autocomplete from "./autocomplete.directive";
import AutocompleteHightlight from "./filter/autocomplete-highlight.filter";
import AutocompleteProvider from "./autocomplete.provider";

const moduleName = "oui.autocomplete";

angular
    .module(moduleName, [])
    .directive("ouiAutocomplete", Autocomplete)
    .filter("ouiAutocompleteHightlight", AutocompleteHightlight)
    .provider("ouiAutocompleteConfiguration", AutocompleteProvider);

export default moduleName;
