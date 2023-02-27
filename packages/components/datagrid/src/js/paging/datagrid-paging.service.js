import DatagridLocalPaging from './datagrid-local-paging';
import DatagridRemotePaging from './datagrid-remote-paging';

export default class {
  constructor($q, $timeout, orderByFilter) {
    'ngInject';

    this.$q = $q;
    this.$timeout = $timeout;
    this.orderByFilter = orderByFilter;
  }

  createLocal(
    columns,
    criteria,
    sorting,
    offset,
    pageSize,
    pageSizeMax,
    rowLoader,
    rows,
    paginationMode,
  ) {
    return new DatagridLocalPaging(
      columns,
      criteria,
      sorting,
      offset,
      pageSize,
      pageSizeMax,
      rowLoader,
      this,
      rows,
      paginationMode,
    );
  }

  createRemote(
    columns,
    criteria,
    sorting,
    offset,
    pageSize,
    pageSizeMax,
    rowLoader,
    rowsLoader,
    paginationMode,
  ) {
    return new DatagridRemotePaging(
      columns,
      criteria,
      sorting,
      offset,
      pageSize,
      pageSizeMax,
      rowLoader,
      this,
      rowsLoader,
      paginationMode,
    );
  }
}
