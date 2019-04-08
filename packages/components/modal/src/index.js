import angular from 'angular';

import Spinner from '@ovh-ux/ui-kit.spinner';

import Modal from './js/modal.component';

const moduleName = 'oui.modal';

angular
  .module(moduleName, [
    Spinner,
  ])
  .component('ouiModal', Modal);

export default moduleName;
