import Showcase from "./showcase.component";
import ShowcaseService from "./showcase.service";

export default angular
    .module("app.components.showcase", [])
    .component("ouiShowcase", Showcase)
    .service("ShowcaseService", ShowcaseService)
    .name;
