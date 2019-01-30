import countries from "./data/countries.json";

export default class SelectController {
    constructor ($http, $timeout) {
        "ngInject";

        this.$http = $http;
        this.$timeout = $timeout;
        this.onBlurCounter = 0;
        this.onFocusCounter = 0;
    }

    $onInit () {
        this.addresses = [];
        this.countries = countries;
        this.ips = SelectController.getIps();
    }

    groupByFirstLetter (item) { // eslint-disable-line class-methods-use-this
        return item.country.name.substr(0, 1).toUpperCase();
    }

    refreshAddresses (address) {
        const params = {
            address,
            sensor: false
        };
        return this.$http.get(
            "http://maps.googleapis.com/maps/api/geocode/json",
            { params }
        ).then(response => {
            this.addresses = response.data.results;
        });
    }

    disableItems ($item) {
        const modulo = 2;
        return this.countries.indexOf($item) % modulo === 1;
    }

    onFocus () {
        this.onFocusCounter++;
    }

    onBlur () {
        this.onBlurCounter++;
    }

    onChange (modelValue) {
        this.onChangeModelValue = modelValue;
    }

    static getIps () {
        const ips = [];
        const prefixes = [
            "127.0",
            "192.168",
            "10.0"
        ];
        for (let i = 1; i < 100; ++i) { // eslint-disable-line no-magic-numbers
            ips.push(`${prefixes[i % 3]}.0.${i}`); // eslint-disable-line no-magic-numbers
        }
        return ips;
    }
}
