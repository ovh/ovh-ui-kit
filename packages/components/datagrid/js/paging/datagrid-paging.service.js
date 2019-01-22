import DatagridLocalPaging from "./datagrid-local-paging";
import DatagridRemotePaging from "./datagrid-remote-paging";

export default class {
    constructor ($q, $timeout, orderByFilter) {
        "ngInject";

        this.$q = $q;
        this.$timeout = $timeout;
        this.orderByFilter = orderByFilter;
    }

    createLocal (columns, sorting, pageSize, rowLoader, rows) {
        return new DatagridLocalPaging(columns, sorting, pageSize, rowLoader, this, rows);
    }

    createRemote (columns, sorting, pageSize, rowLoader, rowsLoader) {
        return new DatagridRemotePaging(columns, sorting, pageSize, rowLoader, this, rowsLoader);
    }
}
