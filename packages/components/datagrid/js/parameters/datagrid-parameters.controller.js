export default class DatagridParametersController {
    constructor ($element, $timeout) {
        "ngInject";

        this.$element = $element;
        this.$timeout = $timeout;
    }

    $onChanges () {
        this.computeColumns();
    }

    $postLink () {
        this.$timeout(() => {
            this.$element.addClass("oui-datagrid-parameters");
        });
    }

    computeColumns () {
        this.customizedColumns = angular.copy(this.columns)
            .map(column => {
                column.visible = !column.hidden;
                return column;
            });
    }

    onColumnChange (columnIndex, isVisible) {
        this.changedColumns = angular.copy(this.customizedColumns);
        this.changedColumns.forEach((column, index) => {
            if (index === columnIndex) {
                column.hidden = !isVisible;
            }
            delete column.visible;
        });
        this.onChange({ columns: this.changedColumns });
    }
}
