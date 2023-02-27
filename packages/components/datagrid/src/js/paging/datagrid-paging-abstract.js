export default class DatagridPagingAbstract {
  constructor(
    columns,
    criteria,
    currentSorting,
    offset,
    pageSize,
    pageSizeMax,
    rowLoader,
    pagingService,
    paginationMode,
  ) {
    this.columns = columns;
    this.currentSorting = currentSorting;
    this.criteria = criteria;
    this.pageSize = pageSize;
    this.pageSizeMax = pageSizeMax;
    this.offset = offset;
    this.rowLoader = rowLoader;
    this.paginationMode = paginationMode;

    this.$q = pagingService.$q;
    this.$timeout = pagingService.$timeout;
    this.orderByFilter = pagingService.orderByFilter;

    this.preventLoadingRows = false;

    this.cachedPageResult = null;
    this.cachedPageResultPristine = null;
  }

  setCriteria(criteria) {
    this.criteria = criteria;
  }

  setOffset(offset) {
    this.offset = offset;
  }

  setPageSize(pageSize) {
    this.pageSize = pageSize;
  }

  getCurrentPageSize() {
    if (!this.totalCount) {
      return this.pageSize;
    }

    return Math.min(this.pageSize, this.totalCount - (this.offset - 1));
  }

  setSort(columnName) {
    if (columnName === this.currentSorting.columnName) {
      this.currentSorting.dir = this.currentSorting.dir === -1 ? 1 : -1;
    } else {
      this.currentSorting = {
        columnName,
        dir: 1,
      };
    }
  }

  getSortColumnName() {
    return this.currentSorting.columnName;
  }

  isSortAsc() {
    return this.currentSorting.dir === 1;
  }

  isSortDesc() {
    return this.currentSorting.dir === -1;
  }

  getSortingConfiguration() {
    const selectedColumn = this.getColumn(this.currentSorting.columnName);
    return { property: selectedColumn && selectedColumn.sortProperty, ...this.currentSorting };
  }

  getColumn(name) {
    for (let i = 0; i < this.columns.length; i += 1) {
      if (this.columns[i].name === name) {
        return this.columns[i];
      }
    }
    return null;
  }

  loadRowsData(rows) {
    if (!this.rowLoader) {
      return this.$q.when();
    }

    return this.$q.all(rows.map((row) => this.loadRowData(row)));
  }

  loadRowData(_row_) {
    const row = _row_;
    if (!row.$promise) {
      row.$promise = this.$q.when(this.rowLoader({ $row: row }))
        .then((fullRow) => Object.assign(row, fullRow))
        .finally(() => {
          delete row.$promise;
        });

      return row.$promise;
    }

    return this.$q.when();
  }

  reloadRows() {
    return this.loadRows(null, true);
  }
}
