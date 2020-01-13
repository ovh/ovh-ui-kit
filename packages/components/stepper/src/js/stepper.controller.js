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
    this.forms = [];
    this.steps = [];
    this.currentIndex = get(this, 'currentIndex', 0);
    this.onInit();
  }

  $postLink() {
    this.$timeout(() => this.$element
      .removeAttr('id')
      .removeAttr('name')
      .addClass('oui-stepper'));

    this.$scope.$watch(
      () => this.currentIndex,
      (index, prevIndex) => {
        // Avoid calling onFocus if unchanged
        this.updateSteps(index, index === prevIndex);
      },
    );
  }

  addStep(step, index) {
    // Priority for position attribute
    if (angular.isNumber(step.position)) {
      this.steps.splice(step.position - 1, 0, step);
    } else if (angular.isNumber(index)) {
      this.steps.splice(index, 0, step);
    } else {
      this.steps.push(step);
    }

    // At this moment, we can't know how much steps we need to add
    // So we need to update all steps at each adding
    // That's why we add a flag to only call once the onFocus callback
    this.updateSteps(this.currentIndex, this.currentIndex !== index);
  }

  removeStep(step) {
    const indexOfStep = this.steps.indexOf(step);
    if (indexOfStep > -1) {
      this.steps.splice(indexOfStep, 1);
      this.updateSteps(this.currentIndex, this.currentIndex !== indexOfStep);
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
    // updateSteps() is launched with the $watch on currentIndex
    this.currentIndex = Math.min(this.currentIndex + 1, this.steps.length);
  }

  prevStep() {
    // updateSteps() is launched with the $watch on currentIndex
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  focusStep(indexToFocus) {
    // updateSteps() is launched with the $watch on currentIndex
    this.currentIndex = indexToFocus;
  }

  updateSteps(indexToFocus, noCallback) {
    this.steps.forEach((_step_, index) => {
      const focused = index === indexToFocus;
      const step = _step_;

      if (focused && !noCallback) {
        step.onFocus();
      }

      if (angular.isDefined(step.stepper)) {
        step.stepper.index = index;
        step.stepper.focused = focused;
        step.stepper.disabled = index > indexToFocus; // Minimize steps after our current index
        step.stepper.last = index === this.steps.length - 1;
      }
    });
  }
}
