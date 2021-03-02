import { addDefaultParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs, $element, $scope, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  setActive() {
    this.tabsCtrl.setActiveTab(this);
  }

  getNodeIndex() {
    let i = 0;
    let item = this.$element[0];

    // Return DOM node index
    while (item.previousSibling) {
      item = item.previousSibling;
      if (item.nodeType === 1 && item.nodeName === 'OUI-TABS-ITEM') {
        i += 1;
      }
    }

    return i;
  }

  $onInit() {
    addDefaultParameter(this, 'id', `ouiTabsItem${this.$scope.$id}`);

    // Watch if hidden
    this.$scope.$watch(
      () => this.tabsCtrl.model,
      (value) => {
        this.isHidden = value !== this.id;
      },
    );
  }

  $onDestroy() {
    if (this.tabsCtrl) {
      this.tabsCtrl.removeItem(this);
    }
  }

  $postLink() {
    this.$timeout(() => this.$element.addClass('oui-tabs-item'));

    if (this.tabsCtrl) {
      // Add item to parent oui-tabs and give node index
      // To support ngIf directive, which delay the adding
      this.tabsCtrl.addItem(this, this.getNodeIndex());
    }
  }
}
