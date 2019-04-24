import Textarea from './js/textarea.component';
import TextareaProvider from './js/textarea.provider';

const moduleName = 'oui.textarea';

angular
  .module(moduleName, [])
  .component('ouiTextarea', Textarea)
  .provider('ouiTextareaConfiguration', TextareaProvider);

export default moduleName;
