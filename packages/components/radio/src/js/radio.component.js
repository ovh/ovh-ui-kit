import controller from "./radio.controller";
import template from "./radio.html";

export default {
    require: {
        radioGroup: "?^ouiRadioGroup",
        radioToggleGroup: "?^ouiRadioToggleGroup"
    },
    template,
    controller,
    bindings: {
        value: "<",
        description: "@?",
        id: "@?",
        name: "@?",
        model: "=?",
        onChange: "&?",
        disabled: "<?",
        thumbnail: "<?",
        required: "<?",
        variant: "@?"
    },
    transclude: true
};
