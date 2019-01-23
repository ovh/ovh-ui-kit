import merge from "lodash/merge";

export default class {
    constructor () {
        this.options = {
            debounceDelay: 250,
            minLength: 2
        };
    }

    /**
     * Set the options of the flatpickr calendar
     * @param {Object} options the configuration of the calendar
     */
    setOptions (options) {
        this.options = merge(this.options, options);
        return this;
    }

    $get () {
        return angular.copy({
            options: this.options
        });
    }
}
