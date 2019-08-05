import Button from '@ovh-ux/ui-kit.button';
import Spinner from '@ovh-ux/ui-kit.spinner';

import StepForm from './js/step-form/step-form.component';
import Stepper from './js/stepper.component';
import StepperProvider from './js/stepper.provider';
import UnsafeFilter from './js/filter/unsafe.filter';

const moduleName = 'oui.stepper';

angular
  .module(moduleName, [
    Button,
    Spinner,
  ])
  .component('ouiStepper', Stepper)
  .component('ouiStepForm', StepForm)
  .provider('ouiStepperConfiguration', StepperProvider)
  .filter('unsafe', UnsafeFilter);

export default moduleName;
