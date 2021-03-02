import Spinner from '@ovh-ux/ui-kit.spinner';

import Collapsible from './js/collapsible.component';

const moduleName = 'oui.collapsible';

angular
  .module(moduleName, [
    Spinner,
  ])
  .component('ouiCollapsible', Collapsible);

export default moduleName;
