import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-button-stories';
angular.module(moduleName, ['oui.button']);

storiesOf('Components/Button', module)
  .add(
    'Simple button',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button aria-label="Manage your servers">Manage your servers</oui-button>
    `)),
  )
  .add(
    'Action buttons',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button
      aria-label="Cancel moving the server"
      variant="secondary"
      disabled="$ctrl.disabled">
      Cancel
    </oui-button>
    <oui-button
      aria-label="Confirm moving the server"
      variant="primary"
      disabled="$ctrl.disabled">
      Confirm
    </oui-button>
    <oui-button
      aria-label="Open help"
      variant="link"
      disabled="$ctrl.disabled">
      Need help?
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Arrow buttons',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button
      aria-label="Previous step"
      variant-nav="previous"
      disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button
      aria-label="Next step"
      variant-nav="next"
      variant="primary"
      disabled="$ctrl.disabled">
      Next
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  );
