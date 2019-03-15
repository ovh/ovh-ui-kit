import angular from 'angular';
import Popover from '@ovh/ui-kit.popover';
import Field from './js/field.component';
import FieldConfigurationProvider from './js/field.provider';

const moduleName = 'oui.field';

angular
  .module(moduleName, [
    Popover,
  ])
  .component('ouiField', Field)
  .provider('ouiFieldConfiguration', FieldConfigurationProvider);

export default moduleName;
