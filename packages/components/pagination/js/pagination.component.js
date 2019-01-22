import controller from "./pagination.controller";
import template from "./pagination.html";

export default {
    template,
    bindings: {
        currentOffset: "<",
        pageSize: "<?",
        pageSizeMax: "<?",
        totalItems: "<?",
        onChange: "&"
    },
    controller
};
