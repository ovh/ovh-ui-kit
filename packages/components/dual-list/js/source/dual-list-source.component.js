import controller from "./dual-list-source.controller";
import template from "./dual-list-source.html";

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
