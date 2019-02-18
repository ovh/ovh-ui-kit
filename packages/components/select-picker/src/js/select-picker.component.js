import controller from "./select-picker.controller";
import template from "./select-picker.html";

export default {
    template,
    controller,
    transclude: {
        sectionSlot: "?ouiSelectPickerSection"
    },
    bindings: {
        model: "=?",
        id: "@?",
        name: "@?",
        label: "@",
        description: "@?",
        placeholder: "@?",
        picture: "@?",
        match: "@",
        values: "<",
        disabled: "<?",
        required: "<?",
        onChange: "&?",
        variant: "@?"
    }
};
