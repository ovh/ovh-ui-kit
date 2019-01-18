import "angular-aria";
import "angular-sanitize";
import angular from "angular";
import KEYBOARD_KEYS from "./keyboard-keys.constant";
import Navbar from "./navbar.component";
import NavbarBrand from "./brand/navbar-brand.component";
import NavbarConfigurationProvider from "./navbar.provider";
import NavbarDropdown from "./dropdown/navbar-dropdown.component";
import NavbarDropdownMenu from "./dropdown/menu/navbar-dropdown-menu.component";
import NavbarGroup from "./group/navbar-group.directive";
import NavbarLink from "./link/navbar-link.component";
import NavbarMenu from "./menu/navbar-menu.component";
import NavbarNotification from "./notification/navbar-notification.component";
import NavbarToggler from "./toggler/navbar-toggler.component";
import Spinner from "@ovh/ui-kit.spinner";

const moduleName = "oui.navbar";

angular
    .module(moduleName, [
        "ngAria",
        "ngSanitize",
        Spinner
    ])
    .constant("KEYBOARD_KEYS", KEYBOARD_KEYS)
    .component("ouiNavbar", Navbar)
    .component("ouiNavbarBrand", NavbarBrand)
    .component("ouiNavbarDropdown", NavbarDropdown)
    .component("ouiNavbarDropdownMenu", NavbarDropdownMenu)
    .component("ouiNavbarLink", NavbarLink)
    .component("ouiNavbarMenu", NavbarMenu)
    .component("ouiNavbarNotification", NavbarNotification)
    .component("ouiNavbarToggler", NavbarToggler)
    .directive("ouiNavbarGroup", NavbarGroup)
    .provider("ouiNavbarConfiguration", NavbarConfigurationProvider);

export default moduleName;
