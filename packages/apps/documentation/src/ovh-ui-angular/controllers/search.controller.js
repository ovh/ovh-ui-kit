import data from "../data/autocomplete.data.json";

export default class {
    $onInit () {
        this.resetCount = 0;
        this.autocomplete = data.objects;
    }

    onSearchChange (modelValue) {
        this.changedValue = modelValue;
    }

    onSearchSubmit (modelValue) {
        this.submittedValue = modelValue;
    }

    onSearchReset () {
        this.resetCount++;
    }
}
