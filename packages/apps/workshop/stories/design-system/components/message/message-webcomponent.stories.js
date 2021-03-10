import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit.message';

import readme from '@ovh-ux/ui-kit.message/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'message-webcomponent.stories';
angular.module(moduleName, ['oui.message']);

export default {
  title: 'Design System/Components/Message/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <!-- Info -->
    <oui-message type="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Success -->
    <oui-message type="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Warning -->
    <oui-message type="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Error -->
    <oui-message type="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>`,
  ),
);

export const Dismissable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <!-- Info -->
    <oui-message
      type="info"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Success -->
    <oui-message
      type="success"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Warning -->
    <oui-message
      type="warning"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>

    <!-- Error -->
    <oui-message
      type="error"
      aria-close-button-label="Close"
      on-dismiss="$ctrl.onDismiss()"
      dismissable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </oui-message>`,
    {
      $ctrl: {
        onDismiss: action('onDismiss'),
      },
    },
  ),
);
