import controller from "./criteria-adder.controller";
import template from "./criteria-adder.html";

export default {
    require: {
        criteriaContainer: "?^^ouiCriteria"
    },
    bindings: {
        id: "@?",
        name: "@?",
        placement: "@?",
        properties: "<",
        disabled: "<?",
        onSubmit: "&"
    },
    controller,
    template
};
