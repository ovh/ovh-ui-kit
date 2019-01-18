import angular from "angular";
import Password from "./password.component";
import PasswordConfigurationProvider from "./password.provider";
import PasswordRule from "./rule/password-rule.component";
import PasswordStrength from "./strength/password-strength.component";

const moduleName = "oui.password";

angular
    .module(moduleName, [])
    .component("ouiPassword", Password)
    .component("ouiPasswordRule", PasswordRule)
    .component("ouiPasswordStrength", PasswordStrength)
    .provider("ouiPasswordConfiguration", PasswordConfigurationProvider);

export default moduleName;
