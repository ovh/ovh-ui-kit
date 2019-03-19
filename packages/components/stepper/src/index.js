import angular from 'angular';

import Button from '@ovh/ui-kit.button';
import Spinner from '@ovh/ui-kit.spinner';

import StepForm from './js/step-form/step-form.component';
import Stepper from './js/stepper.component';
import StepperProvider from './js/stepper.provider';

const moduleName = 'oui.stepper';

angular
  .module(moduleName, [
    Button,
    Spinner,
  ])
  .component('ouiStepper', Stepper)
  .component('ouiStepForm', StepForm)
  .provider('ouiStepperConfiguration', StepperProvider);

export default moduleName;
