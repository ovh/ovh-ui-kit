import angular from "angular";
import Popover from "./popover.directive.js";
import PopoverContent from "./content/popover-content.directive";
import PopoverTrigger from "./trigger/popover-trigger.directive";

const moduleName = "oui.popover";

angular
    .module(moduleName, [])
    .directive("ouiPopover", Popover)
    .directive("ouiPopoverContent", PopoverContent)
    .directive("ouiPopoverTrigger", PopoverTrigger);

export default moduleName;
