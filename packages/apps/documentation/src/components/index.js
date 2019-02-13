import Showcase from "./showcase";
import SidebarMenu from "./sidebar-menu";

const moduleName = "documentation.components";

angular
    .module(moduleName, [
        Showcase,
        SidebarMenu
    ]);

export default moduleName;
