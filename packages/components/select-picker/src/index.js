import angular from 'angular';

import Select from '@ovh/ui-kit.select';

import SelectPicker from './js/select-picker.component';
import SelectPickerSection from './js/section/select-picker-section.component';

const moduleName = 'oui.select-picker';

angular
  .module(moduleName, [
    Select,
  ])
  .component('ouiSelectPicker', SelectPicker)
  .component('ouiSelectPickerSection', SelectPickerSection);

export default moduleName;
