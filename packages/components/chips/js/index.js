import angular from "angular";
import Chips from "./chips.component.js";

const moduleName = "oui.chips";

angular
    .module(moduleName, [])
    .component("ouiChips", Chips);

export default moduleName;
