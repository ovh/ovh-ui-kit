import Checkbox from '@ovh-ux/ui-kit.checkbox';
import Criteria from '@ovh-ux/ui-kit.criteria';
import Pagination from '@ovh-ux/ui-kit.pagination';
import Skeleton from '@ovh-ux/ui-kit.skeleton';
import Spinner from '@ovh-ux/ui-kit.spinner';

import Datagrid from './js/datagrid.directive';
import DatagridCell from './js/cell/cell.component';
import DatagridColumnBuilder from './js/datagrid-column-builder.service';
import DatagridTopbar from './js/topbar/datagrid-topbar.component';
import DatagridPaging from './js/paging/datagrid-paging.service';
import DatagridParameters from './js/parameters/datagrid-parameters.component';
import DatagridProvider from './js/datagrid.provider';
import DatagridService from './js/datagrid.service';

const moduleName = 'oui.datagrid';

angular
  .module(moduleName, [
    'ngAria',
    Checkbox,
    Criteria,
    Pagination,
    Skeleton,
    Spinner,
  ])
  .service('ouiDatagridColumnBuilder', DatagridColumnBuilder)
  .directive('ouiDatagrid', Datagrid)
  .component('ouiDatagridCell', DatagridCell)
  .component('ouiDatagridTopbar', DatagridTopbar)
  .service('ouiDatagridPaging', DatagridPaging)
  .provider('ouiDatagridConfiguration', DatagridProvider)
  .service('ouiDatagridService', DatagridService)
  .component('ouiDatagridParameters', DatagridParameters);

export default moduleName;
