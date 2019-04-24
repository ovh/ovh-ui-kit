import Dropdown from './js/dropdown.component';
import DropdownContent from './js/content/dropdown-content.directive';
import DropdownDivider from './js/divider/dropdown-divider.component';
import DropdownGroup from './js/group/dropdown-group.component';
import DropdownItem from './js/item/dropdown-item.component';
import DropdownTrigger from './js/trigger/dropdown-trigger.directive';

const moduleName = 'oui.dropdown';

angular
  .module(moduleName, [])
  .component('ouiDropdown', Dropdown)
  .directive('ouiDropdownContent', DropdownContent)
  .component('ouiDropdownDivider', DropdownDivider)
  .component('ouiDropdownGroup', DropdownGroup)
  .component('ouiDropdownItem', DropdownItem)
  .directive('ouiDropdownTrigger', DropdownTrigger);

export default moduleName;
