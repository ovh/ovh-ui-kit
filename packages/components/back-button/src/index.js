import Button from '@ovh-ux/ui-kit.button';

import BackButton from './js/back-button.component';
import BackButtonProvider from './js/back-button.provider';

const moduleName = 'oui.back-button';

angular
  .module(moduleName, [
    Button,
  ])
  .component('ouiBackButton', BackButton)
  .provider('ouiBackButtonConfiguration', BackButtonProvider);

export default moduleName;
