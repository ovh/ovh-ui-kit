import controller from "./modal.controller";
import template from "./modal.html";

export default {
    template,
    controller,
    bindings: {
        heading: "@?",
        type: "@?",
        loading: "<?",
        primaryLabel: "@?",
        primaryAction: "&",
        primaryDisabled: "<?",
        secondaryLabel: "@?",
        secondaryAction: "&",
        secondaryDisabled: "<?",
        onDismiss: "&"
    },
    transclude: true
};
