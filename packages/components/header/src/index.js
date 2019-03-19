import angular from 'angular';

import Dropdown from '@ovh/ui-kit.dropdown';

import HeaderTabsDivider from '@ovh/ui-kit.dropdown/src/js/divider/dropdown-divider.component';
import Header from './js/header.component';
import HeaderTabs from './js/tabs/header-tabs.component';
import HeaderTabsDropdown from './js/tabs/dropdown/header-tabs-dropdown.component';
import HeaderTabsItem from './js/tabs/item/header-tabs-item.component';

const moduleName = 'oui.header';

angular
  .module(moduleName, [
    Dropdown,
  ])
  .component('ouiHeader', Header)
  .component('ouiHeaderTabs', HeaderTabs)
  .component('ouiHeaderTabsDivider', HeaderTabsDivider)
  .component('ouiHeaderTabsDropdown', HeaderTabsDropdown)
  .component('ouiHeaderTabsItem', HeaderTabsItem);

export default moduleName;
