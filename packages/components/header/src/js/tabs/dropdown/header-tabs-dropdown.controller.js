const ouiHeaderTabsItemClass = 'oui-header-tabs__item';
const ouiHeaderTabsItemActiveClass = `${ouiHeaderTabsItemClass}_active`;
const ouiHeaderTabsItemDisabledClass = `${ouiHeaderTabsItemClass}_disabled`;
const ouiHeaderTabsDropDownClass = `${ouiHeaderTabsItemClass}_dropdown`;

export default class {
  constructor($element, $scope, $timeout) {
    'ngInject';

    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.disabled = false;
  }

  $postLink() {
    this.$timeout(() => {
      this.$element
        .addClass(`${ouiHeaderTabsItemClass} ${ouiHeaderTabsDropDownClass}`)
        .attr('role', 'listitem');

      const itemCount = (this.$element[0].querySelectorAll(`.${ouiHeaderTabsItemClass}`) || []).length;
      this.$scope.$watch(() => (this.$element[0].querySelectorAll(`.${ouiHeaderTabsItemDisabledClass}`) || []).length, (itemDisabledCount) => {
        if (itemDisabledCount === itemCount) {
          this.disabled = true;
          this.$element.addClass(ouiHeaderTabsItemDisabledClass);
        } else {
          this.disabled = false;
          this.$element.removeClass(ouiHeaderTabsItemDisabledClass);
        }
      });

      this.$scope.$watch(() => !!this.$element[0].querySelector(`.${ouiHeaderTabsItemActiveClass}`), (hasActive) => {
        if (hasActive) {
          this.$element.addClass(ouiHeaderTabsItemActiveClass);
        } else {
          this.$element.removeClass(ouiHeaderTabsItemActiveClass);
        }
      });
    });
  }
}
