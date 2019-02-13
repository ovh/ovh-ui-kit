import SidebarMenu from "./sidebar-menu.component";

const moduleName = "documentation.components.sidebar-menu";

angular
    .module(moduleName, [])
    .component("ouiSidebarMenu", SidebarMenu);

export default moduleName;
