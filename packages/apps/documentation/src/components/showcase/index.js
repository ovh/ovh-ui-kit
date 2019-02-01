import Showcase from "./showcase.component";
import ShowcaseService from "./showcase.service";

const moduleName = "documentation.components.showcase";

angular
    .module(moduleName, [])
    .component("ouiShowcase", Showcase)
    .service("ShowcaseService", ShowcaseService);

export default moduleName;
