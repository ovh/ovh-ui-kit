import angular from "angular";
import Radio from "./radio.component";
import RadioGroup from "./group/radio-group.component";
import RadioToggleGroup from "./toggle-group/radio-toggle-group.component";

const moduleName = "oui.radio";

angular
    .module(moduleName, [])
    .component("ouiRadio", Radio)
    .component("ouiRadioGroup", RadioGroup)
    .component("ouiRadioToggleGroup", RadioToggleGroup);

export default moduleName;
