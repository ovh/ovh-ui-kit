import angular from 'angular';
import Textarea from './textarea.component';
import TextareaProvider from './textarea.provider';

const moduleName = 'oui.textarea';

angular
  .module(moduleName, [])
  .component('ouiTextarea', Textarea)
  .provider('ouiTextareaConfiguration', TextareaProvider);

export default moduleName;
