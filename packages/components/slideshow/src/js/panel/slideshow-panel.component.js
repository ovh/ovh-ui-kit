import controller from "./slideshow-panel.controller";
import template from "./slideshow-panel.html";

export default {
    template,
    controller,
    bindings: {
        heading: "@?",
        picture: "@?",
        onClick: "&?",
        href: "@?",
        external: "<?",
        label: "@?"
    },
    transclude: true
};
