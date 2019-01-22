import controller from "./datagrid-parameters.controller";
import template from "./datagrid-parameters.html";

export default {
    bindings: {
        columns: "<",
        onChange: "&"
    },
    controller,
    template
};
