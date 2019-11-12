import { addBooleanParameter } from '@ovh-ux/ui-kit.core/src/js/component-utils';

export default class {
  constructor($attrs) {
    'ngInject';

    this.$attrs = $attrs;
  }

  $onInit() {
    addBooleanParameter(this, 'active');
    addBooleanParameter(this, 'disabled');
    addBooleanParameter(this, 'external');

    if (this.external) {
      this.linkTarget = '_blank';
      this.linkRel = 'noopener';
    }
  }

  // Return value of "ui-sref"
  getFullSref() {
    return `${this.state}(${JSON.stringify(this.stateParams)})`;
  }
}
