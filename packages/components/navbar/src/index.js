import 'angular-aria';
import 'angular-sanitize';
import angular from 'angular';

import Spinner from '@ovh-ux/ui-kit.spinner';

import KEYBOARD_KEYS from './js/keyboard-keys.constant';
import Navbar from './js/navbar.component';
import NavbarBrand from './js/brand/navbar-brand.component';
import NavbarConfigurationProvider from './js/navbar.provider';
import NavbarDropdown from './js/dropdown/navbar-dropdown.component';
import NavbarDropdownMenu from './js/dropdown/menu/navbar-dropdown-menu.component';
import NavbarGroup from './js/group/navbar-group.directive';
import NavbarLink from './js/link/navbar-link.component';
import NavbarMenu from './js/menu/navbar-menu.component';
import NavbarNotification from './js/notification/navbar-notification.component';
import NavbarToggler from './js/toggler/navbar-toggler.component';

const moduleName = 'oui.navbar';

angular
  .module(moduleName, [
    'ngAria',
    'ngSanitize',
    Spinner,
  ])
  .constant('KEYBOARD_KEYS', KEYBOARD_KEYS)
  .component('ouiNavbar', Navbar)
  .component('ouiNavbarBrand', NavbarBrand)
  .component('ouiNavbarDropdown', NavbarDropdown)
  .component('ouiNavbarDropdownMenu', NavbarDropdownMenu)
  .component('ouiNavbarLink', NavbarLink)
  .component('ouiNavbarMenu', NavbarMenu)
  .component('ouiNavbarNotification', NavbarNotification)
  .component('ouiNavbarToggler', NavbarToggler)
  .directive('ouiNavbarGroup', NavbarGroup)
  .provider('ouiNavbarConfiguration', NavbarConfigurationProvider);

export default moduleName;
