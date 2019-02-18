import angular from 'angular';
import Calendar from '@ovh/ui-kit.calendar';
import Timepicker from './timepicker.component';

const moduleName = 'oui.timepicker';

angular
  .module(moduleName, [Calendar])
  .component('ouiTimepicker', Timepicker);

export default moduleName;
