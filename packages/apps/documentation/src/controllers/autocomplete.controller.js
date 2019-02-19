import data from '../data/autocomplete.data.json';

export default class {
  $onInit() {
    this.suggestionStrings = angular.copy(data.strings);
    this.suggestionObjects = angular.copy(data.objects);
  }
}
