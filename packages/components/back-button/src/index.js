import Button from '@ovh-ux/ui-kit.button';

import BackButton from './js/back-button.component';

const moduleName = 'oui.back-button';

angular
  .module(moduleName, [
    Button,
  ])
  .component('ouiBackButton', BackButton);

export default moduleName;
