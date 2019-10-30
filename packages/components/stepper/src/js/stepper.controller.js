import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';

export default class {
  constructor($attrs, $element, $scope, $timeout) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.indexToFocus = get(this, 'indexToFocus', 0);
    this.forms = [];
    this.steps = [];

    this.onInit();
  }

  $postLink() {
    this.$timeout(() => this.$element
      .removeAttr('id')
      .removeAttr('name')
      .addClass('oui-stepper'));

    this.$scope.$watch(
      () => this.indexToFocus,
      (index) => {
        if (!isUndefined(index) && this.indexToFocus !== this.currentIndex) {
          this.focusStep(index);
        }
      },
    );
  }

  addStep(step) {
    if (!step.position) {
      this.steps.push(step);
    } else {
      this.steps.splice(step.position - 1, 0, step);
    }

    this.focusStep(this.indexToFocus);
  }

  removeStep(step) {
    const indexOfStep = this.steps.indexOf(step);
    if (indexOfStep > -1) {
      this.steps.splice(indexOfStep, 1);
      this.focusStep(this.indexToFocus);
    }
  }

  addForm(form, index) {
    this.forms[index] = form;
    this.nextStep();

    // Check index for onFinish event
    if (index === this.steps.length - 1) {
      this.onFinish({ forms: this.forms });
    }
  }

  nextStep() {
    const indexToFocus = Math.min(this.indexToFocus + 1, this.steps.length);
    this.focusStep(indexToFocus);
  }

  prevStep() {
    const indexToFocus = Math.max(this.indexToFocus - 1, 0);
    this.focusStep(indexToFocus);
  }

  focusStep(indexToFocus) {
    this.steps.forEach((_step_, index) => {
      const focused = index === indexToFocus;
      const step = _step_;

      // Disable steps not focused
      if (angular.isDefined(step.stepper)) {
        step.stepper.index = index;
        step.stepper.focused = focused;
        step.stepper.disabled = index > indexToFocus;
        step.stepper.last = index === this.steps.length - 1;
      }

      // Call onFocus step event
      if (focused && indexToFocus !== this.currentIndex) {
        this.currentIndex = indexToFocus;
        this.indexToFocus = indexToFocus;

        step.onFocus();
      }
    });
  }
}
