export default class {
    constructor ($element) {
        "ngInject";

        this.$element = $element;
    }

    $onInit () {
        this.index = this.index || 0;
    }

    $postLink () {
        // The parent scope of datagrid is required to get parent
        // values inside cells
        this.cellScope = this.datagridCtrl.getParentScope().$new(false);

        this.$element.css("display", "block");

        if (this.row && this.row.$promise) {
            this.row.$promise.finally(() => {
                this._compileCell();
            });
        } else {
            this._compileCell();
        }

        this.cellScope.$watch(() => this.datagridCtrl.selectedRows[this.index], (isSelected) => {
            this.cellScope.$isSelected = isSelected || false;
        });
    }

    $onChanges (changes) {
        if ((changes.row && !changes.row.isFirstChange()) ||
            (changes.column && !changes.column.isFirstChange())) {
            this._compileCell();
        }
    }

    _compileCell () {
        this.cellScope.$row = this.row;
        this.cellScope.$column = this.column;
        this.cellScope.$value = this.row[this.column.name];
        this.cellScope.$rowIndex = this.index;

        if (this.column.compiledTemplate) {
            this.column.compiledTemplate(this.cellScope, clone => {
                this.$element.empty();
                this.$element.append(clone);
            });
        } else {
            this.$element[0].innerHTML = this.cellScope.$value;
        }
    }
}
