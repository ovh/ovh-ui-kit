export default class StepperController {
  constructor() {
    this.customSubmitCount = 0;
  }

  onInit(value) {
    this.onInitModel = value;
  }

  onFinish(forms) {
    this.onFinishForms = forms;
  }

  onFocus(value) {
    this.onfocusModel = value;
  }

  onSubmit(form) {
    this.onSubmitForm = form;
  }

  onCustomSubmit() {
    this.customSubmitCount += 1;
  }
}
