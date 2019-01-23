import controller from "./dropdown-item.controller";
import template from "./dropdown-item.html";

export default {
    controller,
    template,
    bindings: {
        text: "@", // Deprecated: Replaced by transclude value
        ariaLabel: "@?",
        href: "@?",
        state: "@?",
        stateParams: "<?",
        disabled: "<?",
        external: "<?",
        onClick: "&"
    },
    transclude: true
};
