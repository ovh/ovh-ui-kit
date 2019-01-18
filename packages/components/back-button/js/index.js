import angular from "angular";
import BackButton from "./back-button.component.js";

const moduleName = "oui.back-button";

angular
    .module(moduleName, [])
    .component("ouiBackButton", BackButton);

export default moduleName;
