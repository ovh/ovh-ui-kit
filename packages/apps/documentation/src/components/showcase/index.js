import Showcase from "./showcase.component";

const moduleName = "documentation.components.showcase";

angular
    .module(moduleName, [])
    .component("ouiShowcase", Showcase);

export default moduleName;
