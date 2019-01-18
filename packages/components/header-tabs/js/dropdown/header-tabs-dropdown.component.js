import controller from "./header-tabs-dropdown.controller";
import template from "./header-tabs-dropdown.html";

export default {
    bindings: {
        text: "@"
    },
    controller,
    template,
    transclude: true
};
