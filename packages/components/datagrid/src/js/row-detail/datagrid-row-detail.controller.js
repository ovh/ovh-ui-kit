export default class {
  constructor($element) {
    'ngInject';

    this.$element = $element;
  }

  $postLink() {
    this.rowDetailScope = this.datagridCtrl.getParentScope().$new(false);
    this.compileElement();
    this.onRowExpand();
  }

  compileElement() {
    this.rowDetailScope.$row = this.row;
    this.copyRow = angular.copy(this.row);

    this.datagridCtrl.rowDetailCompiledTemplates[this.index](this.rowDetailScope, (clone) => {
      this.$element.empty();
      this.$element.append(clone);
    });
  }

  $doCheck() {
    if (!angular.equals(this.row, this.copyRow)) {
      this.$postLink();
    }
  }
}
