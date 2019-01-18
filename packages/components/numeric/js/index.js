import angular from "angular";
import Numeric from "./numeric.component.js";

const moduleName = "oui.numeric";

angular
    .module(moduleName, [])
    .component("ouiNumeric", Numeric);

export default moduleName;
