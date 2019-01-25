import contentTemplate from "./popover-content.html";

// Deprecated: Support only for old use
export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: {
            popover: "^ouiPopover"
        },
        controller: class {},
        controllerAs: "$ctrl",
        bindToController: true,
        scope: {},
        template: contentTemplate,
        transclude: true,
        link: (scope, element) => {
            element.addClass("oui-popover");
        }
    };
};
