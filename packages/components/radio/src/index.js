import Radio from './js/radio.component';
import RadioGroup from './js/group/radio-group.component';
import RadioToggleGroup from './js/toggle-group/radio-toggle-group.component';

const moduleName = 'oui.radio';

angular
  .module(moduleName, [])
  .component('ouiRadio', Radio)
  .component('ouiRadioGroup', RadioGroup)
  .component('ouiRadioToggleGroup', RadioToggleGroup);

export default moduleName;
