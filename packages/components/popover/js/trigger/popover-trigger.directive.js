import controller from "./popover-trigger.controller";

// Deprecated: Support only for old use
export default () => {
    "ngInject";

    return {
        restrict: "AE",
        require: {
            popover: "^ouiPopover"
        },
        controller,
        bindToController: true,
        scope: {}
    };
};
