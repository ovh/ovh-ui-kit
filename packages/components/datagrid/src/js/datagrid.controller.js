import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';
import find from 'lodash/find';
import { hasProperty } from './util';

import template from './datagrid.html';

const cssSorted = 'oui-datagrid__cell_sorted';
const cssSortable = 'oui-datagrid__header_sortable';
const cssSortableAsc = 'oui-datagrid__header_sortable-asc';
const cssSortableDesc = 'oui-datagrid__header_sortable-desc';

// On initial render we need to wait few seconds before calling
// the checkScroll method otherwise panel size would be wrong.
// This timing is not perfect, if the page render takes more time
// than usual the scroll position could be miscalculated.
const checkScrollOnRefreshDataDelay = 1000;

export default class DatagridController {
  constructor($attrs, $compile, $element, $transclude, $q, $scope, $window, $timeout,
    ouiDatagridPaging, ouiDatagridColumnBuilder, ouiDatagridConfiguration,
    ouiDatagridService) {
    'ngInject';

    this.$attrs = $attrs;
    this.$compile = $compile;
    this.$element = $element;
    this.$transclude = $transclude;
    this.$q = $q;
    this.$scope = $scope;
    this.$window = $window;
    this.$timeout = $timeout;
    this.ouiDatagridPaging = ouiDatagridPaging;
    this.ouiDatagridColumnBuilder = ouiDatagridColumnBuilder;
    this.ouiDatagridService = ouiDatagridService;
    this.columnElements = [];
    this.actionColumnElements = [];
    this.topbarElements = [];
    this.selectedRows = [];
    this.selectAllRows = false;
    this.expandedRows = [];    

    this.config = ouiDatagridConfiguration;

    this.checkScroll = () => {
      const panel = this.scrollablePanel;
      const stickyBorderWidth = 10;

      // Ugly and not efficient way to instantly add or remove classes because
      // checkScroll is run thousands times.
      this.$scope.$apply(() => {
        if (panel.scrollWidth - panel.scrollLeft - stickyBorderWidth <= panel.clientWidth) {
          this.scrollBegin = false;
        } else {
          this.scrollBegin = true;
        }

        if (panel.scrollLeft <= stickyBorderWidth) {
          this.scrollEnd = false;
        } else {
          this.scrollEnd = true;
        }
      });
    };
  }

  $onInit() {
    this.hasActionMenu = false;
    this.scrollBegin = false;
    this.scrollEnd = false;
    this.firstLoading = true;
    this.pageSize = parseInt(this.pageSize, 10) || this.config.pageSize;
    this.filterableColumns = [];
    this.criteria = [];

    addBooleanParameter(this, 'selectableRows');

    if (this.id) {
      this.ouiDatagridService.registerDatagrid(this);
    }
  }

  $postLink() {
    addBooleanParameter(this, 'customizable');
    addBooleanParameter(this, 'expandableRows');    

    this.$compile(template)(this.$scope, (clone) => {
      this.$element.append(clone);
    });

    if (this.htmlContent.trim().length) {
      const originalContent = angular.element(this.htmlContent);
      this.columnElements = DatagridController.filterElements(originalContent, 'oui-datagrid-column');
      this.actionColumnElements = DatagridController.filterElements(originalContent, 'oui-action-menu');
      this.topbarElements = DatagridController.filterElements(originalContent, 'oui-datagrid-topbar');
      this.expandedRowElements = DatagridController.filterElements(originalContent, 'oui-datagrid-expanded-row');
    }

    const builtColumns = this.buildColumns();
    this.previousRows = angular.copy(this.rows);

    if (this.rowsLoader) {
      this.paging = this.ouiDatagridPaging.createRemote(
        this.columns,
        builtColumns.currentSorting,
        this.pageSize,
        this.rowLoader,
        this.rowsLoader,
      );
      this.refreshData(() => this.paging.setOffset(1));
    } else {
      this.paging = this.ouiDatagridPaging.createLocal(
        this.columns,
        builtColumns.currentSorting,
        this.pageSize,
        this.rowLoader,
        this.rows,
      );

      if (this.rows) {
        this.refreshData(() => this.paging.setRows(this.rows));
      }
    }

    // Manage responsiveness
    if (this.hasActionMenu || this.customizable || this.selectableRows) {
      this.scrollablePanel = this.$element[0].querySelector('.oui-datagrid-responsive-container__overflow-container');
      if (this.scrollablePanel) {
        angular.element(this.$window).on('resize', this.checkScroll);
        angular.element(this.scrollablePanel).on('scroll', this.checkScroll);
      }
    }

    // Manage filter configuration
    this.isSearchTextVisible = this.columns
      .filter(column => column.searchable)
      .length > 0;
    this.filterableColumns = this.columns.filter(column => column.filterable);
  }

    $onChanges (changes) { // eslint-disable-line
    if (changes.columnsDescription && !changes.columnsDescription.isFirstChange()) {
      this.buildColumns();
    }

    if (changes.columnsParameters && !changes.columnsParameters.isFirstChange()) {
      this.buildColumns();
    }
  }

  $doCheck() {
    // Prevent recall this if there is no page change.
    // this.paging.preventLoadingRows is true if there has been no page
    // or page size change since last call.
    if (!angular.equals(this.previousRows, this.rows)
            && this.rows && this.paging && !this.paging.preventLoadingRows) {
      this.previousRows = angular.copy(this.rows);
      this.refreshData(() => this.paging.setRows(this.rows));
    }
  }

  $onDestroy() {
    if (this.hasActionMenu) {
      angular.element(this.$window).off('resize', this.checkScroll);
      angular.element(this.scrollablePanel).off('scroll');
    }

    if (this.id) {
      this.ouiDatagridService.unregisterDatagrid(this.id);
    }
  }

  buildColumns() {
    const builtColumns = this.columnsDescription && this.columnsDescription.length
      ? this.ouiDatagridColumnBuilder.buildFromJs(this.columnsDescription, this.getParentScope())
      : this.ouiDatagridColumnBuilder.build(this.columnElements, this.getParentScope());

    if (this.actionColumnElements.length) {
      // Set default value for the menu
      angular.element(this.actionColumnElements)
        .attr('compact', true)
        .attr('placement', 'end');

      this.actionColumn = this.ouiDatagridColumnBuilder.buildActionColumn(
        this.actionColumnElements[0],
      );
      this.hasActionMenu = true;
    }

    if (this.topbarElements.length) {
      this.topbarCompiledTemplate = this.$compile(`<div>${this.topbarElements[0].innerHTML}</div>`);
      this.hasTopbarContent = true;
    }

    if (this.expandedRowElements && this.expandedRowElements.length) {
      this.expandedRowCompiledTemplate = this.$compile(`<div>${this.expandedRowElements[0].innerHTML}</div>`);
    }

    this.availableColumns = angular.copy(builtColumns.columns)
      .map((_column_) => { // Override default with custom columns
        const column = _column_;
        const customColumn = find(this.columnsParameters, {
          name: column.name,
        });
        if (customColumn) {
          column.hidden = customColumn.hidden;
        }
        return column;
      });

    this.columns = this.availableColumns
      .filter(column => !column.hidden);

    this.columns.forEach((_column_) => {
      const column = _column_;
      if (column.title) {
        return;
      }

      column.disableWatcher = this.$scope.$watch(
        () => this.ouiDatagridColumnBuilder.buildTitle(column.rawTitle, this.getParentScope()),
        (newTitle) => {
          if (newTitle) {
            column.title = newTitle;
            column.disableWatcher();
          }
        },
      );
    });

    return builtColumns;
  }

  onColumnsChange(columns) {
    this.availableColumns = angular.copy(columns);
    this.columns = columns.filter(column => !column.hidden);

    const columnsParameters = this.availableColumns
      .filter(column => column.name)
      .map((column) => {
        const cleanColumn = {
          name: column.name,
        };

        if (column.hidden) {
          cleanColumn.hidden = true;
        }

        return cleanColumn;
      });

    if (this.id) {
      this.onColumnsParametersChange({
        id: this.id,
        columns: columnsParameters,
      });
    }
  }

  getParentScope() {
    return this.$scope.$parent;
  }

    hasProperty (obj, prop) { // eslint-disable-line
    if (!obj) {
      return false;
    }

    return hasProperty(obj, prop);
  }

  onCriteriaChange(criteria) {
    // Preview criteria are visually filtered by oui-criteria
    this.criteria = criteria;
    this.refreshData(() => {
      this.paging.setOffset(1);
      this.paging.setCriteria(criteria);
    }, false);
  }

  onPaginationChange({ offset, pageSize }) {
    this.refreshData(() => {
      this.paging.setOffset(offset);
      this.paging.setPageSize(pageSize);
      this.onPageChange({
        $pagination: {
          offset,
          pageSize,
        },
      });
    }, true);
  }

  refreshData(callback, skipSortAndFilter, hideLoader, forceLoadRows) {
    if (this.loading) {
      return this.$q.when();
    }

    if (!hideLoader) {
      this.loading = true;
      this.displayedRows = DatagridController.createEmptyRows(this.paging.getCurrentPageSize());
    }

    this.selectedRows = this.selectedRows.map(() => false);
    this.selectAllRows = false;

    this.refreshDatagridPromise = this.$q.when((callback || angular.noop)())
      .then(() => this.paging.loadData(skipSortAndFilter, forceLoadRows))
      .then((result) => {
        this.displayedRows = result.data;
        if (this.hasActionMenu) {
          setTimeout(() => this.checkScroll(), checkScrollOnRefreshDataDelay);
        }
      })
      .finally(() => {
        this.loading = false;
        this.firstLoading = false;
        this.refreshDatagridPromise = null;
      });

    return this.refreshDatagridPromise;
  }

  sort(column) {
    if (!column || !column.sortable) {
      return;
    }

    this.refreshData(() => this.paging.setSort(column.name));
  }

  getSortableClasses(column) {
    if (column.name !== this.paging.getSortColumnName()) {
      return {
        [cssSortable]: !!column.sortable,
      };
    }
    return {
      [cssSortable]: !!column.sortable,
      [cssSorted]: true,
      [cssSortableAsc]: this.paging.isSortAsc(),
      [cssSortableDesc]: this.paging.isSortDesc(),
    };
  }

  getSelectedRows() {
    return this.selectedRows.reduce((result, isSelected, index) => {
      if (isSelected) {
        result.push(this.displayedRows[index]);
      }
      return result;
    }, []);
  }

  toggleRowSelection(index, isSelected) {
    const rowCount = this.displayedRows.length;
    this.selectedRows[index] = isSelected;
    const selectedRowsCount = this.getSelectedRows().length;

    if (selectedRowsCount === rowCount) {
      this.selectAllRows = true;
    } else if (selectedRowsCount === 0) {
      this.selectAllRows = false;
    } else {
      this.selectAllRows = null;
    }

    this.onRowSelect({
      $row: this.displayedRows[index],
      $rows: this.getSelectedRows(),
    });
  }

  toggleAllRowsSelection(modelValue) {
    if (modelValue === null) {
      this.selectedRows = this.displayedRows.map(() => true);
    } else {
      this.selectedRows = this.displayedRows.map(() => modelValue);
    }

    this.onRowSelect({
      $row: null,
      $rows: this.getSelectedRows(),
    });
  }

  toggleRowExpansion(index) {
    if (this.expandableRows) {
      if (!this.isRowExpanded(index)) {
        this.expandedRows.push(index);
      } else {
        this.expandedRows.splice(this.expandedRows.indexOf(index), 1);
      }
    }
  }

  isRowExpanded(index) {
    return this.expandedRows.indexOf(index) !== -1;
  }

  static createEmptyRows(pageSize) {
    return Array(pageSize)
      .fill(undefined);
  }

  static filterElements(elements, tagName) {
    const tagNameUpper = tagName.toUpperCase();
    const filteredElements = [];

    angular.forEach(elements, (element) => {
      if (element.tagName === tagNameUpper) {
        filteredElements.push(element);
      }
    });

    return filteredElements;
  }
}
