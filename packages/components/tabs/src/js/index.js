import angular from 'angular';
import Tabs from './tabs.component';
import TabsItem from './item/tabs-item.component';

const moduleName = 'oui.tabs';

angular
  .module(moduleName, [])
  .component('ouiTabs', Tabs)
  .component('ouiTabsItem', TabsItem);

export default moduleName;
