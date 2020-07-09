export default class {
  constructor($element, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$timeout = $timeout;
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-navbar-dropdown')
      .addClass('oui-navbar-list__item'));
  }

  onTriggerClick() {
    this.navbarCtrl.toggleMenu(this.name);
    this.onClick({
      open: !!this.navbarCtrl.navigation && !!this.navbarCtrl.navigation[this.name],
    });
  }
}
