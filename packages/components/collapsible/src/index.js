import Button from '@ovh-ux/ui-kit.button';
import Spinner from '@ovh-ux/ui-kit.spinner';

import Collapsible from './js/collapsible.component';

const moduleName = 'oui.collapsible';

angular
  .module(moduleName, [
    Button,
    Spinner,
  ])
  .component('ouiCollapsible', Collapsible);

export default moduleName;
