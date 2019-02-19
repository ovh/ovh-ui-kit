export default class {
  onAdd(form) {
    this.addedForm = form;
  }

  onRemove(form) {
    this.removedForm = form;
  }

  onChange(forms) {
    this.changedForms = forms;
  }
}
