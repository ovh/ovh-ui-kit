import controller from "./component-status.controller";
import template from "./component-status.html";

export default {
    template,
    controller,
    bindings: {
        cxDesign: "@",
        ux: "@"
    }
};
