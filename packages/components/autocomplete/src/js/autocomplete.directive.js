import controller from "./autocomplete.controller";

export default () => {
    "ngInject";

    return {
        restrict: "A",
        require: {
            model: "ngModel"
        },
        scope: true,
        bindToController: {
            suggestions: "<ouiAutocomplete",
            options: "<?ouiAutocompleteOptions",
            property: "@?ouiAutocompleteProperty",
            onSelect: "&ouiAutocompleteOnSelect"
        },
        controller,
        controllerAs: "$autocompleteCtrl"
    };
};
