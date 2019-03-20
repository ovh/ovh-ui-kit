import angular from 'angular';

import Tabs from './js/tabs.component';
import TabsItem from './js/item/tabs-item.component';

const moduleName = 'oui.tabs';

angular
  .module(moduleName, [])
  .component('ouiTabs', Tabs)
  .component('ouiTabsItem', TabsItem);

export default moduleName;
