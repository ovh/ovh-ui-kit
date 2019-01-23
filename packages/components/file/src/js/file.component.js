import controller from "./file.controller";
import template from "./file.html";

export default {
    require: {
        form: "?^^form"
    },
    bindings: {
        model: "=",
        id: "@?",
        name: "@?",
        placeholder: "@?",
        accept: "@?",
        maxsize: "<?",
        disabled: "<?",
        required: "<?",
        multiple: "<?",
        droparea: "<?",
        preview: "<?",
        onSelect: "&"
    },
    controller,
    template
};
