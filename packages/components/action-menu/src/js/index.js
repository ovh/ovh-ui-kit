import ActionMenu from "./action-menu.component";
import angular from "angular";
import Dropdown from "@ovh/ui-kit.dropdown";
import DropdownDivider from "@ovh/ui-kit.dropdown/src/js/divider/dropdown-divider.component";
import DropdownItem from "@ovh/ui-kit.dropdown/src/js/item/dropdown-item.component";

const moduleName = "oui.action-menu";

angular
    .module(moduleName, [Dropdown])
    .component("ouiActionMenu", ActionMenu)
    .component("ouiActionMenuDivider", DropdownDivider)
    .component("ouiActionMenuItem", DropdownItem);

export default moduleName;
