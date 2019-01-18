import controller from "./slideshow-panel.controller";
import template from "./slideshow-panel.html";

export default {
    template,
    controller,
    bindings: {
        heading: "@?",
        text: "@?", // Deprecated: Replaced by transclude value
        picture: "@?",
        onClick: "&?",
        href: "@?",
        external: "<?",
        label: "@?"
    },
    transclude: true
};
