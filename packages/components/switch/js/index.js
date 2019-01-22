import angular from "angular";
import Switch from "./switch.component.js";

const moduleName = "oui.switch";

angular
    .module(moduleName, [])
    .component("ouiSwitch", Switch);

export default moduleName;
