import DatagridPagingAbstract from './datagrid-paging-abstract';

export default class DatagridRemotePaging extends DatagridPagingAbstract {
  constructor(
    columns,
    criteria,
    currentSorting,
    offset,
    pageSize,
    pageSizeMax,
    rowLoader,
    pagingService,
    rowsLoader,
    paginationMode,
  ) {
    super(
      columns,
      criteria,
      currentSorting,
      offset,
      pageSize,
      pageSizeMax,
      rowLoader,
      pagingService,
      paginationMode,
    );

    this.rowsLoader = rowsLoader;
  }

  loadData(skipSort) {
    return this.rowsLoader({
      $config: {
        offset: this.offset,
        pageSize: this.pageSize,
        sort: this.getSortingConfiguration(),
        criteria: this.criteria,
        skipSort,
      },
    })
      .then((result) => this.loadRows(result));
  }

  loadRows(pageResult) {
    this.loadRowsData(pageResult.data);
    this.totalCount = pageResult.meta.totalCount;

    if (pageResult.meta.currentOffset) {
      this.offset = pageResult.meta.currentOffset;
    }

    return pageResult;
  }
}
