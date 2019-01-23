import controller from "./dual-list-target.controller";
import template from "./dual-list-target.html";

export default {
    require: {
        dualList: "^ouiDualList"
    },
    bindings: {
        heading: "@?",
        placeholder: "@?",
        loading: "<?",
        searchable: "<?"
    },
    controller,
    template
};
