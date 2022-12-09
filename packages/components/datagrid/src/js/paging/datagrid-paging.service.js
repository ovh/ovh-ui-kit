import DatagridLocalPaging from './datagrid-local-paging';
import DatagridRemotePaging from './datagrid-remote-paging';

export default class {
  constructor($q, $timeout, orderByFilter) {
    'ngInject';

    this.$q = $q;
    this.$timeout = $timeout;
    this.orderByFilter = orderByFilter;
  }

  createLocal(columns, criteria, sorting, offset, pageSize, pageSizeMax, rowLoader, rows) {
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
    );
  }

  createRemote(columns, criteria, sorting, offset, pageSize, pageSizeMax, rowLoader, rowsLoader) {
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
    );
  }
}
