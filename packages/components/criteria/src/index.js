import Chips from '@ovh-ux/ui-kit.chips';
import Dropdown from '@ovh-ux/ui-kit.dropdown';
import Field from '@ovh-ux/ui-kit.field';
import Search from '@ovh-ux/ui-kit.search';
import Select from '@ovh-ux/ui-kit.select';

import CriteriaAdderProvider from './js/adder/criteria-adder.provider';
import CriteriaAdder from './js/adder/criteria-adder.component';
import Criteria from './js/criteria.component';

const moduleName = 'oui.criteria';

angular
  .module(moduleName, [
    Chips,
    Dropdown,
    Field,
    Search,
    Select,
  ])
  .component('ouiCriteria', Criteria)
  .component('ouiCriteriaAdder', CriteriaAdder)
  .provider('ouiCriteriaAdderConfiguration', CriteriaAdderProvider);

export default moduleName;
