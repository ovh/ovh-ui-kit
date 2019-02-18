import angular from 'angular';
import Dropdown from './dropdown.component';
import DropdownContent from './content/dropdown-content.directive';
import DropdownDivider from './divider/dropdown-divider.component';
import DropdownGroup from './group/dropdown-group.component';
import DropdownItem from './item/dropdown-item.component';
import DropdownTrigger from './trigger/dropdown-trigger.directive';

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
