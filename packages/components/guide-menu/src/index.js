import angular from 'angular';

import Dropdown from '@ovh/ui-kit.dropdown';

import DropdownDivider from '@ovh/ui-kit.dropdown/src/js/divider/dropdown-divider.component';
import DropdownGroup from '@ovh/ui-kit.dropdown/src/js/group/dropdown-group.component';
import DropdownItem from '@ovh/ui-kit.dropdown/src/js/item/dropdown-item.component';
import GuideMenu from './js/guide-menu.component';

const moduleName = 'oui.guide-menu';

angular
  .module(moduleName, [
    Dropdown,
  ])
  .component('ouiGuideMenu', GuideMenu)
  .component('ouiGuideMenuDivider', DropdownDivider)
  .component('ouiGuideMenuGroup', DropdownGroup)
  .component('ouiGuideMenuItem', DropdownItem);

export default moduleName;
