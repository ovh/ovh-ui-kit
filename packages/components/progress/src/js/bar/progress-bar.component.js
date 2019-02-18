import controller from "./progress-bar.controller";
import template from "./progress-bar.html";

export default {
    template,
    controller,
    bindings: {
        type: "@",
        value: "<"
    },
    require: {
        progressCtrl: "^^ouiProgress"
    },
    transclude: true
};
