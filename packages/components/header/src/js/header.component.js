import controller from "./header.controller.js";
import template from "./header.html";

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
