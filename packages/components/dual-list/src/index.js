import Button from '@ovh-ux/ui-kit.button';
import Search from '@ovh-ux/ui-kit.search';
import Spinner from '@ovh-ux/ui-kit.spinner';

import DualList from './js/dual-list.component';
import DualListProvider from './js/dual-list.provider';
import DualListSource from './js/source/dual-list-source.component';
import DualListTarget from './js/target/dual-list-target.component';

const moduleName = 'oui.dual-list';

angular
  .module(moduleName, [
    Button,
    Search,
    Spinner,
  ])
  .component('ouiDualList', DualList)
  .component('ouiDualListSource', DualListSource)
  .component('ouiDualListTarget', DualListTarget)
  .provider('ouiDualListConfiguration', DualListProvider);

export default moduleName;
