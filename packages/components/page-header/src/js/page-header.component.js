import controller from "./page-header.controller.js";
import template from "./page-header.html";

export default {
    template,
    controller,
    bindings: {
        heading: "@?",
        description: "@?"
    },
    transclude: {
        guide: "?ouiGuideMenu",
        tabs: "?ouiHeaderTabs"
    }
};
