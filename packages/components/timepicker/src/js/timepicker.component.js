import controller from "./timepicker.controller";
import template from "./timepicker.html";

export default {
    bindings: {
        model: "=",

        id: "@?",
        name: "@?",
        placeholder: "@?",
        format: "@?",
        altFormat: "@?",

        appendToBody: "<?",
        inline: "<?",
        "static": "<?",
        enableSeconds: "<?",
        enableAmPm: "<?",

        disabled: "<?",
        required: "<?",

        onChange: "&",
        onClose: "&",
        onOpen: "&"
    },
    controller,
    template
};
