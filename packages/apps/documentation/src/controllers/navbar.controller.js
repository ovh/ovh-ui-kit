import data from "@ovh/ui-kit.navbar/src/js/index.spec.data.json";

export default class {
    constructor ($timeout) {
        "ngInject";

        this.$timeout = $timeout;
    }

    $onInit () {
        Object.keys(data).forEach(key => {
            this[key] = angular.copy(data[key]);
        });

        // Simulate a promise for togglerLinks
        const delay = 2500;
        this.$timeout(() => (this.togglerLinks = angular.copy(data.mainLinks)), delay);
    }
}
