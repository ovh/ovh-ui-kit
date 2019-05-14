export default class {
  constructor($element) {
    'ngInject';

    this.$element = $element;
  }

  $postLink() {
    this.expandedRowScope = this.datagridCtrl.getParentScope().$new(false);
    this.compileElement();
  }

  compileElement() {
    this.expandedRowScope.$row = this.row;

    this.datagridCtrl.expandedRowCompiledTemplate(this.expandedRowScope, (clone) => {
      this.$element.empty();
      this.$element.append(clone);
    });
  }
}
