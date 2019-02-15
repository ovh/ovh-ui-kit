import controller from "./back-button.controller";
import template from "./back-button.html";

export default {
    template,
    controller,
    bindings: {
        id: "@?",
        name: "@?",
        ariaLabel: "@?",
        href: "@?",
        state: "@?",
        stateParams: "<?",
        onClick: "&?"
    },
    transclude: true
};
