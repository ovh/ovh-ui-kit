import angular from "angular";
import Field from "./field.component.js";
import FieldConfigurationProvider from "./field.provider.js";
import Popover from "@ovh/ui-kit.popover";

const moduleName = "oui.field";

angular
    .module(moduleName, [Popover])
    .component("ouiField", Field)
    .provider("ouiFieldConfiguration", FieldConfigurationProvider);

export default moduleName;
