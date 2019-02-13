import Showcase from "./showcase.component";

const moduleName = "documentation.components.showcase";

angular
    .module(moduleName, [])
    .component("docShowcase", Showcase);

export default moduleName;
