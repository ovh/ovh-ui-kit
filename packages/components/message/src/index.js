import angular from 'angular';
import Message from './js/message.component';

const moduleName = 'oui.message';

angular
  .module(moduleName, [])
  .component('ouiMessage', Message);

export default moduleName;
