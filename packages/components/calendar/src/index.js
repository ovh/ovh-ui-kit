import angular from 'angular';
import Calendar from './js/calendar.component';
import CalendarProvider from './js/calendar.provider';

const moduleName = 'oui.calendar';

angular
  .module(moduleName, [])
  .component('ouiCalendar', Calendar)
  .provider('ouiCalendarConfiguration', CalendarProvider);

export default moduleName;
