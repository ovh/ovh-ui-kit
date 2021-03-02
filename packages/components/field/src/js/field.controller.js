import { getAttribute, hasAttributeValue } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

const LABEL_SELECTOR = '.oui-field__label';
const CUSTOM_ELEMENT_CLASS = 'oui-field__component';

const CONTROLS_SELECTORS = [
  'input',
  'select',
  'textarea',

  // Class set on custom components only.
  `.${CUSTOM_ELEMENT_CLASS}`,
];

const VALIDATION_PARAMETERS = {
  min: ['min', 'ng-min', 'ngMin'],
  max: ['max', 'ng-max', 'ngMax'],
  minlength: ['minlength', 'ng-minlength', 'ngMinlength'],
  maxlength: ['maxlength', 'ng-maxlength', 'ngMaxlength'],
  pattern: ['pattern', 'ng-pattern', 'ngPattern'],
};

const MESSAGES_ORDER = ['required', 'number', 'email', 'minlength', 'maxlength', 'min', 'max', 'pattern'];

export default class FieldController {
  constructor($element, $scope, $timeout, ouiFieldConfiguration) {
    'ngInject';

    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
    this.ouiFieldConfiguration = ouiFieldConfiguration;
  }

  $onInit() {
    this.controlElements = [];
    this.controls = {};
    this.currentErrorField = null;
    this.ids = [];
    this.validationParameters = {};
    this.invalid = false;
    this.blurred = false;
    this.size = this.size || 'auto';
  }

  $postLink() {
    // Since digest is already done and DOM is not written,
    // we need to wait for next digest to get `name` and `id` attribute.
    this.$timeout(() => {
      // Get all controls in the field.
      this.controls = this.getAllControls();

      if (!this.controlElements.length) {
        throw new Error('oui-field component requires at least one form control.');
      }

      if (!Object.keys(this.controls).length) {
        throw new Error('oui-field component requires a form control with a name.');
      }

      // The id is taken from the first control occurrence
      // to create the `for` attribute on the label.
      // If the control is a checkbox or a radio, we skip this part
      // because we don't want to link the field label to the first checkbox/radio.
      if (this.ids.length === 1 && this.controlElements.length === 1) {
        const [ids] = this.ids;
        this.for = ids;
      }

      this.$ouiFieldElement = angular.element(this.$element[0].querySelector('.oui-field'));

      Object.keys(this.controls).forEach((name) => {
        const namedControls = this.controls[name];

        // Manage the way the error are shown on the field.
        namedControls.forEach((control) => {
          // Avoid binding DOM events
          if (angular.element(control).hasClass(CUSTOM_ELEMENT_CLASS)) {
            return;
          }
          this.bindDOMEvents(control, name);
        });

        // Retrieve all validation parameters by field name.
        this.validationParameters[name] = FieldController
          .getValidationParameters(this.controls[name][0]);
      });

      // Handle click on label to set focus on form element.
      this.labelElement = angular.element(this.$element[0].querySelector(LABEL_SELECTOR));
      this.labelElement.on('click', () => {
        this.$scope.$broadcast('oui:focus');
      });

      // Handle Popover aria
      if (this.labelPopover) {
        this.popoverId = `ouiFieldPopover${this.$scope.$id}`;
        if (this.for) {
          const $ouiFieldInput = angular.element(this.$element[0].querySelector(`#${this.for}`));
          $ouiFieldInput.attr('aria-describedby', this.popoverId);
        }
      }
    });
  }

  $onDestroy() {
    Object.keys(this.controls).forEach((name) => {
      const namedControls = this.controls[name];
      namedControls.forEach((control) => {
        angular.element(control).off('blur');
        angular.element(control).off('focus');
      });
    });

    if (this.labelElement) {
      this.labelElement.off('click');
    }
  }

  bindDOMEvents(controlElement, name) {
    angular.element(controlElement).on('blur', () => {
      this.$timeout(() => {
        this.checkControlErrors(controlElement, name);
      });
    });

    angular.element(controlElement).on('focus', () => {
      this.$timeout(() => {
        if (this.form && this.form[name]) {
          this.form[name].$touched = false;
        }
      });
    });
  }

  checkControlErrors(controlElement, name) {
    this.blurred = true;
    if (this.form && this.form[name] && this.form[name].$invalid) {
      this.currentErrorField = name;
    } else {
      this.currentErrorField = null;
    }
  }

  isErrorVisible() {
    if (!this.form) {
      return false;
    }

    this.checkAllErrors();
    return this.invalid && (this.blurred || this.form.$submitted);
  }

  checkAllErrors() {
    this.invalid = Object.keys(this.controls)
      .map((name) => {
        if (!this.form || !(name in this.form)) {
          return false;
        }
        if (this.form[name].$invalid && !this.currentErrorField) {
          this.currentErrorField = name;
        }
        return this.form[name].$invalid;
      })
      .reduce(
        (fieldInvalid, controlInvalid) => fieldInvalid || controlInvalid,
        false,
      );
  }

  getFirstError() {
    const names = Object.keys(this.controls);
    for (let i = 0; i < names.length; i += 1) {
      if (this.form && this.form[names[i]] && this.form[names[i]].$invalid) {
        return this.form[names[i]].$error;
      }
    }

    return null;
  }

  getMessagesOrder() {
    // first known errors then custom errors
    return Object.keys(this.getFirstError() || {}).sort((a, b) => (
      MESSAGES_ORDER.indexOf(a) < MESSAGES_ORDER.indexOf(b)
    ));
  }

  getMessageString(errorName) {
    return (this.errorMessages && this.errorMessages[errorName])
      || this.ouiFieldConfiguration.translations.errors[errorName]
      || this.ouiFieldConfiguration.translations.errors.invalid;
  }

  getErrorMessage(errorName) {
    const message = this.getMessageString(errorName);
    const parameterValue = this.validationParameters[this.currentErrorField][errorName];
    return message.replace(`{{${errorName}}}`, parameterValue);
  }

  getAllControls() {
    const controlsSelector = CONTROLS_SELECTORS.join(',');
    this.controlElements = Array.from(this.$element[0].querySelectorAll(controlsSelector));
    return this.controlElements

    // Exclude all controls that have no defined name attribute.
      .filter((control) => hasAttributeValue(control, 'name'))
      .map((control) => {
        // Get all ids available on controls
        if (hasAttributeValue(control, 'id')) {
          this.ids.push(getAttribute(control, 'id'));
        }

        return getAttribute(control, 'name');
      })
      .reduce((_controls_, name) => {
        const controls = _controls_;
        controls[name] = Array.from(this.$element[0].querySelectorAll(`[name="${name}"]`));
        return controls;
      }, {});
  }

  static getValidationParameters(controlElement) {
    const validationParameters = {};
    Object.keys(VALIDATION_PARAMETERS).forEach((validationName) => {
      const attributes = VALIDATION_PARAMETERS[validationName];
      attributes.forEach((attributeName) => {
        if (hasAttributeValue(controlElement, attributeName)) {
          validationParameters[validationName] = getAttribute(controlElement, attributeName);
        }
      });
    });
    return validationParameters;
  }
}
