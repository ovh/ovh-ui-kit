import { addBooleanParameter, addDefaultParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class StepFormController {
  constructor($attrs, $element, $scope, $timeout, ouiStepperConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.translations = angular.copy(ouiStepperConfiguration.translations);
  }

  $onInit() {
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'editable');
    addBooleanParameter(this, 'skippable');
    addBooleanParameter(this, 'preventNext');

    // Add default name
    addDefaultParameter(this, 'name', `ouiStepForm${this.$scope.$id}`);

    // Add 'cancelText' default value
    if (angular.isDefined(this.$attrs.cancelHref) || angular.isDefined(this.$attrs.onCancel)) {
      addDefaultParameter(this, 'cancelText', this.translations.cancelButtonLabel);
    }

    // By default, we can edit a step
    if (angular.isUndefined(this.$attrs.editable)) {
      this.editable = true;
    }

    // Show validation if no attribute 'navigation'
    if (angular.isUndefined(this.$attrs.navigation)) {
      this.navigation = true;
    }

    // Force custom validation if no attribute 'valid'
    if (angular.isUndefined(this.$attrs.valid)) {
      this.valid = true;
    }
  }

  $postLink() {
    // Sometimes the digest cycle is done before dom manipulation,
    // So we use $timeout to force the $apply
    this.$timeout(() => this.$element
      .addClass('oui-stepper__step oui-stepper__step_form')
      .removeAttr('id')
      .removeAttr('name'));

    // Check if Stepper parent
    if (this.stepperCtrl) {
      this.stepper = {};
      this.stepperCtrl.addStep(this, this.getNodeIndex());
    }
  }

  $onDestroy() {
    if (this.stepperCtrl) {
      this.stepperCtrl.removeStep(this);
    }
  }

  getNodeIndex() {
    let i = 0;
    let item = this.$element[0];

    // Calculate DOM node index
    // To get position in parent ouiStepper
    while (item.previousSibling) {
      item = item.previousSibling;
      if (item.nodeType === Node.ELEMENT_NODE && item.nodeName === 'OUI-STEP-FORM') {
        i += 1;
      }

      // Count transcluded steps
      if (item.childNodes) {
        let innerSteps = 0;
        item.childNodes.forEach((childNode) => {
          if (childNode.nodeType === Node.ELEMENT_NODE && childNode.nodeName === 'OUI-STEP-FORM') {
            innerSteps += 1;
          }
        });

        i += innerSteps;
      }
    }

    return i;
  }

  onFormSubmit(form) {
    this.$scope.$emit('oui-step-form.submit', { form });
    this.onSubmit({ form });

    if (form.$valid && this.valid) {
      // Add form to forms array, and focus next step
      this.stepperCtrl.addForm(form, this.stepper.index);
    }
  }

  setFocus(form) {
    // currentIndex is watched, and launch focusStep()
    this.stepperCtrl.currentIndex = this.stepper.index;
    form.$setPristine();
  }
}
