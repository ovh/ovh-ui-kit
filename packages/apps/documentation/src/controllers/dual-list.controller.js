import data from "../data/dual-list.data.json";

export default class {
    constructor () {
        this.data = data;
    }

    $onInit () {
        this.onAddCount = 0;
        this.onRemoveCount = 0;
        this.onChangeCount = 0;

        // Source
        this.sourceStrings = angular.copy(this.data.strings.source);
        this.sourceObjects = angular.copy(this.data.objects.source);
        this.sourceNestedObjects = angular.copy(this.data.nestedObjects.source);
        this.sourceLoading = angular.copy(this.data.strings.source);
        this.sourceEvents = angular.copy(this.data.strings.source);

        // Target
        this.targetStrings = angular.copy(this.data.strings.target);
        this.targetObjects = angular.copy(this.data.objects.target);
        this.targetNestedObjects = angular.copy(this.data.nestedObjects.target);
        this.targetLoading = angular.copy(this.data.strings.target);
        this.targetEvents = angular.copy(this.data.strings.target);
    }

    onAdd (item) {
        this.onAddItem = item;
        this.onAddCount += 1;
    }

    onRemove (item) {
        this.onRemoveItem = item;
        this.onRemoveCount += 1;
    }

    onChange (item) {
        this.onChangeItem = item;
        this.onChangeCount += 1;
    }
}
