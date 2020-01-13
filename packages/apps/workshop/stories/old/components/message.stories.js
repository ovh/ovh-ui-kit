import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.message/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-message-stories';
angular.module(moduleName, ['oui.message']);

storiesOf('Old/Components/Message', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Normal',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-message type="info">Message</oui-message>
    <oui-message type="success">Message</oui-message>
    <oui-message type="warning">Message</oui-message>
    <oui-message type="error">Message</oui-message>
    `)),
  )
  .add(
    'Dismissable',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-message>
    `, {
      $ctrl: {
        onDismiss: action('onDismiss'),
      },
    })),
  );
