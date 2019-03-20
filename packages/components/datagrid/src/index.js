import 'angular-aria';
import angular from 'angular';

import Checkbox from '@ovh/ui-kit.checkbox';
import Criteria from '@ovh/ui-kit.criteria';
import Pagination from '@ovh/ui-kit.pagination';
import Spinner from '@ovh/ui-kit.spinner';

import Cell from './js/cell/cell.component';
import Datagrid from './js/datagrid.directive';
import DatagridColumnBuilder from './js/datagrid-column-builder.service';
import DatagridExtraTop from './js/extra-top/extra-top.component';
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
    Spinner,
  ])
  .service('ouiDatagridColumnBuilder', DatagridColumnBuilder)
  .directive('ouiDatagrid', Datagrid)
  .component('ouiDatagridCell', Cell)
  .component('ouiDatagridExtraTop', DatagridExtraTop)
  .service('ouiDatagridPaging', DatagridPaging)
  .provider('ouiDatagridConfiguration', DatagridProvider)
  .service('ouiDatagridService', DatagridService)
  .component('ouiDatagridParameters', DatagridParameters);

export default moduleName;
