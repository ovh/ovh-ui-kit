import angular from "angular";
import PageHeader from "./page-header.component";

const moduleName = "oui.page-header";

angular
    .module(moduleName, [])
    .component("ouiPageHeader", PageHeader);

export default moduleName;
