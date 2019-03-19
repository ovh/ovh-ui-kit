import angular from 'angular';

import Password from './js/password.component';
import PasswordConfigurationProvider from './js/password.provider';
import PasswordRule from './js/rule/password-rule.component';
import PasswordStrength from './js/strength/password-strength.component';

const moduleName = 'oui.password';

angular
  .module(moduleName, [])
  .component('ouiPassword', Password)
  .component('ouiPasswordRule', PasswordRule)
  .component('ouiPasswordStrength', PasswordStrength)
  .provider('ouiPasswordConfiguration', PasswordConfigurationProvider);

export default moduleName;
