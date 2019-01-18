import controller from "./dropdown-trigger.controller";

export default () => ({
    restrict: "AE",
    require: {
        dropdown: "^ouiDropdown"
    },
    controller,
    controllerAs: "$dropdownTriggerCtrl",
    bindToController: {
        text: "@",
        ariaLabel: "@?",
        disabled: "<?"
    },
    scope: {}
});
