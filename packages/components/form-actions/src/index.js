import angular from 'angular';

import FormActions from './js/form-actions.component';
import FormActionsProvider from './js/form-actions.provider';

const moduleName = 'oui.form-actions';

angular
  .module(moduleName, [])
  .component('ouiFormActions', FormActions)
  .provider('ouiFormActionsConfiguration', FormActionsProvider);

export default moduleName;
