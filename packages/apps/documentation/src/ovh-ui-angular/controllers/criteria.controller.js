import data from "../data/criteria.data.json";

export default class {
    $onInit () {
        this.inputValue = angular.copy(data.properties);
    }

    onSubmit (modelValue) {
        this.outputValue = angular.copy(modelValue);
    }
}
