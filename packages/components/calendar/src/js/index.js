import angular from 'angular';
import Calendar from './calendar.component';
import CalendarProvider from './calendar.provider';

const moduleName = 'oui.calendar';

angular
  .module(moduleName, [])
  .component('ouiCalendar', Calendar)
  .provider('ouiCalendarConfiguration', CalendarProvider);

export default moduleName;
