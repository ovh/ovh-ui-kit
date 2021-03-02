import { addDefaultParameter, removeHtmlTags } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs, $document, $element, $scope, $timeout, $window) {
    'ngInject';

    this.$attrs = $attrs;
    this.$document = $document;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.$window = $window;
  }

  $onInit() {
    addDefaultParameter(this, 'id', `ouiCollapsible${this.$scope.$id}`);
    addDefaultParameter(this, 'expanded', false);

    // Check body height for transition animation
    const body = this.$element[0].querySelector('.oui-collapsible__body');
    this.$scope.$watch(() => body.offsetHeight, (newHeight, oldHeight) => {
      if (newHeight !== oldHeight) {
        this.wrapperHeight = `${newHeight}px`;
      }
    });
  }

  $onChanges({ heading }) {
    if (heading && heading.currentValue) {
      this.heading = removeHtmlTags(heading.currentValue);
    }
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-collapsible')
      .attr('id', this.id)
      .removeAttr('aria-label'));

    // Apply on resize for new body height
    angular.element(this.$window)
      .on('resize', () => this.$scope.$apply());
  }

  close() {
    if (this.expanded) {
      this.toggle();
    }
  }

  toggle() {
    // Close opened items from the same group before opening this one
    if (this.group && !this.expanded) {
      const items = this.$document[0].querySelectorAll(`oui-collapsible[group="${this.group}"]`);

      // `items` is a jqLite Array
      angular.forEach(items, (item) => angular.element(item).controller('ouiCollapsible').close());
    }

    this.expanded = !this.expanded;
    this.onToggle({ expanded: this.expanded });
  }
}
