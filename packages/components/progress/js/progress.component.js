import controller from "./progress.controller";

export default {
    controller,
    bindings: {
        compact: "<?",
        minValue: "@?",
        maxValue: "@?"
    }
};
