import SidebarMenu from "./sidebar-menu.component";

const moduleName = "documentation.components.sidebar-menu";

angular
    .module(moduleName, [])
    .component("docSidebarMenu", SidebarMenu);

export default moduleName;
