import DatagridLocalPaging from './datagrid-local-paging';
import DatagridRemotePaging from './datagrid-remote-paging';

export default class {
  constructor($q, $timeout, orderByFilter) {
    'ngInject';

    this.$q = $q;
    this.$timeout = $timeout;
    this.orderByFilter = orderByFilter;
  }

  createLocal(columns, sorting, offset, pageSize, rowLoader, rows) {
    return new DatagridLocalPaging(columns, sorting, offset, pageSize, rowLoader, this, rows);
  }

  createRemote(columns, sorting, offset, pageSize, rowLoader, rowsLoader) {
    return new DatagridRemotePaging(
      columns,
      sorting,
      offset,
      pageSize,
      rowLoader,
      this,
      rowsLoader,
    );
  }
}
