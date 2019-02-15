import controller from "./button.controller";
import template from "./button.html";

export default {
    bindings: {
        id: "@?",
        name: "@?",
        type: "@?",
        variant: "@?",
        variantNav: "@?",
        ariaLabel: "@?",
        disabled: "<?",
        onClick: "&"
    },
    controller,
    template,
    transclude: true
};
