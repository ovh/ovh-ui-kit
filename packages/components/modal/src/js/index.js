import angular from 'angular';
import Spinner from '@ovh/ui-kit.spinner';
import Modal from './modal.component';

const moduleName = 'oui.modal';

angular
  .module(moduleName, [
    Spinner,
  ])
  .component('ouiModal', Modal);

export default moduleName;
