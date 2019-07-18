export default class {
  constructor($attrs, $element, $timeout, $transclude) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
    this.$transclude = $transclude;
  }

  $onInit() {
    this.transcludeActions = this.$transclude.isSlotFilled('actionsSlot') || this.$transclude.isSlotFilled('actionMenuSlot');
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .addClass('oui-tile__item'));
  }
}
