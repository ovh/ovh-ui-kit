import ComponentStatus from "./component-status.component";
import componentStatusConfig from "./component-status.config";
import ComponentStatusProvider from "./component-status.provider";

export default angular
    .module("app.components.component-status", [])
    .component("componentStatus", ComponentStatus)
    .provider("ComponentStatus", ComponentStatusProvider)
    .config(componentStatusConfig)
    .name;
