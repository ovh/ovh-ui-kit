import controller from "./dual-list.controller";

export default {
    controller,
    bindings: {
        source: "=",
        target: "=",
        property: "@?",
        onAdd: "&",
        onRemove: "&",
        onChange: "&"
    }
};
