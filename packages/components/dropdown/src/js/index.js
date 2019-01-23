import angular from "angular";
import Dropdown from "./dropdown.component.js";
import DropdownContent from "./content/dropdown-content.directive.js";
import DropdownDivider from "./divider/dropdown-divider.component.js";
import DropdownGroup from "./group/dropdown-group.component.js";
import DropdownItem from "./item/dropdown-item.component.js";
import DropdownTrigger from "./trigger/dropdown-trigger.directive.js";

const moduleName = "oui.dropdown";

angular
    .module(moduleName, [])
    .component("ouiDropdown", Dropdown)
    .directive("ouiDropdownContent", DropdownContent)
    .component("ouiDropdownDivider", DropdownDivider)
    .component("ouiDropdownGroup", DropdownGroup)
    .component("ouiDropdownItem", DropdownItem)
    .directive("ouiDropdownTrigger", DropdownTrigger);

export default moduleName;
