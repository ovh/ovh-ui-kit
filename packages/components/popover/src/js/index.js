import angular from "angular";
import Popover from "./popover.directive.js";

const moduleName = "oui.popover";

angular
    .module(moduleName, [])
    .directive("ouiPopover", Popover);

export default moduleName;
