import controller from "./guide-menu.controller";
import template from "./guide-menu.html";

export default {
    template,
    controller,
    bindings: {
        text: "@",
        align: "@?",
        ariaLabel: "@?"
    },
    transclude: true
};
