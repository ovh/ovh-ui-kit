import angular from 'angular';
import Button from '@ovh/ui-kit.button';
import BackButton from './back-button.component';

const moduleName = 'oui.back-button';

angular
  .module(moduleName, [
    Button,
  ])
  .component('ouiBackButton', BackButton);

export default moduleName;
