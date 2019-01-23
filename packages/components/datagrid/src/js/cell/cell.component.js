import controller from "./cell.controller";

export default {
    controller,
    require: {
        datagridCtrl: "^^ouiDatagrid"
    },
    bindings: {
        row: "<",
        column: "<",
        index: "<?"
    }
};
