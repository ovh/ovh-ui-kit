import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.message/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-message-stories';
angular.module(moduleName, ['oui.message']);

export default {
  title: 'Version 3/Components/Message',

  parameters: {
    notes: readme,
  },
};

export const Normal = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-message type="info">Message</oui-message>
    <oui-message type="success">Message</oui-message>
    <oui-message type="warning">Message</oui-message>
    <oui-message type="error">Message</oui-message>`,
  ),
);

export const Dismissable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-message
      type="info"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Message
    </oui-message>

    <oui-message
      type="success"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Message
    </oui-message>

    <oui-message
      type="warning"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Message
    </oui-message>

    <oui-message
      type="error"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Message
    </oui-message>`,
    {
      $ctrl: {
        onDismiss: action('onDismiss'),
      },
    },
  ),
);
