import DatagridPagingAbstract from './datagrid-paging-abstract';
import Filter from '../filter/filter';

export default class DatagridLocalPaging extends DatagridPagingAbstract {
  constructor(columns, currentSorting, pageSize, rowLoader, pagingService, rows) {
    super(columns, currentSorting, pageSize, rowLoader, pagingService);

    this.setRows(rows);
  }

  setRows(rows) {
    // Keep pristine rows to force reload if necessary.
    this.rows = angular.copy(rows);

    // Work with cachedRows.
    // Copied to not trigger reload in $doCheck.
    this.cachedRows = angular.copy(rows);

    this.totalCount = rows ? rows.length : 0;
  }

  loadData(skipSortAndFilter, forceLoadRows) {
    // Reset rows.
    if (forceLoadRows) {
      this.cachedRows = angular.copy(this.rows);
    }

    if (!skipSortAndFilter || forceLoadRows) {
      this.filter();
      this.sort();
    }

    return this.$q.when({
      data: this.sortedRows.slice(this.offset - 1, this.offset - 1 + this.pageSize),
      meta: {
        pageCount: Math.ceil(this.sortedRows.length / this.pageSize),
        totalCount: this.sortedRows.length,
      },
    })
      .then((result) => this.loadRows(result));
  }

  loadRows(pageResult) {
    this.preventLoadingRows = true;
    this.loadRowsData(pageResult.data)
      .finally(() => {
        // Delay the change of the value to prevent $doCheck of DatagridController
        // calling refreshData for the last update.
        this.$timeout(() => {
          this.preventLoadingRows = false;
        });
      });
    this.totalCount = pageResult.meta.totalCount;

    return pageResult;
  }

  filter() {
    const filter = new Filter(this.criteria, this.columns);
    this.filteredRows = filter.applyFilter(this.cachedRows);
  }

  sort() {
    const sortConfiguration = this.getSortingConfiguration();
    this.sortedRows = this.orderByFilter(
      this.filteredRows,
      sortConfiguration.property,
      sortConfiguration.dir < 0,
    );
  }
}
