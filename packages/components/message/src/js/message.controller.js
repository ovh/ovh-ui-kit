import { addBooleanParameter } from '@ovh-ux/ui-kit.components-utils/src/js/component-utils';

export default class {
  constructor($attrs) {
    'ngInject';

    this.$attrs = $attrs;
  }

  $onInit() {
    addBooleanParameter(this, 'dismissable');
  }

  dismiss() {
    this.dismissed = true;
    this.onDismiss();
  }
}
