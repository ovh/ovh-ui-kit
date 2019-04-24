import Dropdown from '@ovh-ux/ui-kit.dropdown';

import Pagination from './js/pagination.component';
import PaginationConfigurationProvider from './js/pagination.provider';

const moduleName = 'oui.pagination';

angular
  .module(moduleName, [
    Dropdown,
  ])
  .component('ouiPagination', Pagination)
  .provider('ouiPaginationConfiguration', PaginationConfigurationProvider);

export default moduleName;
