import controller from "./password-rule.controller";
import template from "./password-rule.html";

export default {
    require: {
        password: "^ouiPassword"
    },
    bindings: {
        caption: "@?",
        pattern: "@?",
        validator: "&"
    },
    controller,
    template,
    transclude: true
};
