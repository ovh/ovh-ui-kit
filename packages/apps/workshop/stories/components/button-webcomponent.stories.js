import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-button-stories';
angular.module(moduleName, ['oui.button']);

storiesOf('Components|Buttons/WebComponent/Primary', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="primary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="primary" variant-nav="previous" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="primary" variant-nav="next" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Large',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button size="l" variant="primary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="primary" variant-nav="previous" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="primary" variant-nav="next" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Small',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button size="s" variant="primary" disabled="$ctrl.disabled">
      OK
    </oui-button>
    <oui-button size="s" variant="primary" disabled="$ctrl.disabled">
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  );
