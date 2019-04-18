export default class {
  constructor($element) {
    'ngInject';

    this.$element = $element;
  }

  $postLink() {
    this.topbarScope = this.datagridCtrl.getParentScope().$new(false);
    this.topbarScope.$selectedRows = [];
    this.topbarScope.$watchCollection(() => this.datagridCtrl.getSelectedRows(), (rows) => {
      this.topbarScope.$selectedRows = rows || [];
    });
    this.compileElement();
  }

  compileElement() {
    this.datagridCtrl.topbarCompiledTemplate(this.topbarScope, (clone) => {
      this.$element.empty();
      this.$element.append(clone);
    });
  }
}
