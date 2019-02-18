export default class DatagridParametersController {
  constructor($element, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onChanges() {
    this.computeColumns();
  }

  $postLink() {
    this.$timeout(() => {
      this.$element.addClass('oui-datagrid-parameters');
    });
  }

  computeColumns() {
    this.customizedColumns = angular.copy(this.columns)
      .map((_column_) => {
        const column = _column_;
        column.visible = !column.hidden;
        return column;
      });
  }

  onColumnChange(columnIndex, isVisible) {
    this.changedColumns = angular.copy(this.customizedColumns);
    this.changedColumns.forEach((_column_, index) => {
      const column = _column_;
      if (index === columnIndex) {
        column.hidden = !isVisible;
      }
      delete column.visible;
    });
    this.onChange({ columns: this.changedColumns });
  }
}
