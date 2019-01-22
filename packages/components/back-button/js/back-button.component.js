import controller from "./back-button.controller";
import template from "./back-button.html";

export default {
    template,
    controller,
    bindings: {
        id: "@?",
        name: "@?",
        heading: "@?", // Deprecated: Replaced by transclude value
        title: "@?", // Deprecated: Replaced by transclude value
        ariaLabel: "@?",
        href: "@?",
        state: "@?",
        stateParams: "<?",
        onClick: "&?"
    },
    transclude: true
};
