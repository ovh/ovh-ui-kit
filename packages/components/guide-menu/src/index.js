import Dropdown from '@ovh-ux/ui-kit.dropdown';

import DropdownDivider from '@ovh-ux/ui-kit.dropdown/src/js/divider/dropdown-divider.component';
import DropdownGroup from '@ovh-ux/ui-kit.dropdown/src/js/group/dropdown-group.component';
import DropdownItem from '@ovh-ux/ui-kit.dropdown/src/js/item/dropdown-item.component';
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
