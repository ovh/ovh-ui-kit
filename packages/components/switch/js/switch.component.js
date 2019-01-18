import controller from "./switch.controller";
import template from "./switch.html";

export default {
    controller,
    template,
    bindings: {
        model: "=?",
        id: "@?",
        name: "@?",
        disabled: "<?",
        required: "<?",
        onChange: "&"
    }
};
