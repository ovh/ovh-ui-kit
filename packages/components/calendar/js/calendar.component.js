import controller from "./calendar.controller";
import template from "./calendar.html";

export default {
    bindings: {
        model: "=",

        id: "@?",
        name: "@?",
        placeholder: "@?",
        mode: "@?",
        format: "@?",
        altFormat: "@?",

        appendToBody: "<?",
        inline: "<?",
        "static": "<?",
        maxDate: "<?",
        minDate: "<?",
        disableDate: "<?",
        enableDate: "<?",
        enableTime: "<?",
        weekNumbers: "<?",

        options: "<?",

        disabled: "<?",
        required: "<?",

        onChange: "&",
        onClose: "&",
        onOpen: "&"
    },
    controller,
    template
};
