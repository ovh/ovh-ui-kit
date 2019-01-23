import controller from "./action-menu.controller";
import template from "./action-menu.html";

export default {
    template,
    controller,
    bindings: {
        text: "@",
        align: "@?",
        ariaLabel: "@?",
        compact: "<?",
        disabled: "<?"
    },
    transclude: true
};
