import angular from 'angular';

import InlineAdder from './js/inline-adder.component';
import InlineAdderField from './js/field/inline-adder-field.component';
import InlineAdderProvider from './js/inline-adder.provider';
import InlineAdderRow from './js/row/inline-adder-row.component';

const moduleName = 'oui.inline-adder';

angular
  .module(moduleName, [])
  .component('ouiInlineAdder', InlineAdder)
  .component('ouiInlineAdderField', InlineAdderField)
  .component('ouiInlineAdderRow', InlineAdderRow)
  .provider('ouiInlineAdderConfiguration', InlineAdderProvider);

export default moduleName;
