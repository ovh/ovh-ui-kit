import angular from 'angular';
import Button from '@ovh/ui-kit.button';
import Spinner from '@ovh/ui-kit.spinner';
import File from './js/file.component';
import FileProvider from './js/file.provider';

const moduleName = 'oui.file';

angular
  .module(moduleName, [
    Button,
    Spinner,
  ])
  .component('ouiFile', File)
  .provider('ouiFileConfiguration', FileProvider);

export default moduleName;
