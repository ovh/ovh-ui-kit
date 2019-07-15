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
    <oui-button variant="primary" icon-left="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="l" variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
  )
  .add(
    'Block',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="primary" disabled="$ctrl.disabled" block>
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-left="oui-icon-folder" disabled="$ctrl.disabled" block>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </oui-button>
    <oui-button variant="primary" icon-right="oui-icon-folder" disabled="$ctrl.disabled" block>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Navigation',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="primary" variant-nav="previous" disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button variant="primary" variant-nav="next" disabled="$ctrl.disabled">
      Next
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  );

storiesOf('Components|Buttons/WebComponent/Secondary', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="secondary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="secondary" icon-left="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="secondary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="l" variant="secondary" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="secondary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="secondary" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="s" variant="secondary" disabled="$ctrl.disabled">
      OK
    </oui-button>
    <oui-button size="s" variant="secondary" disabled="$ctrl.disabled">
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Block',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="secondary" disabled="$ctrl.disabled" block>
      Call to action
    </oui-button>
    <oui-button variant="secondary" icon-left="oui-icon-folder" disabled="$ctrl.disabled" block>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </oui-button>
    <oui-button variant="secondary" icon-right="oui-icon-folder" disabled="$ctrl.disabled" block>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Navigation',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="secondary" variant-nav="previous" disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button variant="secondary" variant-nav="next" disabled="$ctrl.disabled">
      Next
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  );

storiesOf('Components|Buttons/WebComponent/Link', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="link" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="link" icon-left="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="l" variant="link" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
      Call to action
    </oui-button>
    <oui-button size="l" variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled">
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
    <oui-button size="s" variant="link" disabled="$ctrl.disabled">
      OK
    </oui-button>
    <oui-button size="s" variant="link" disabled="$ctrl.disabled">
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Block',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="link" disabled="$ctrl.disabled" block>
      Call to action
    </oui-button>
    <oui-button variant="link" icon-left="oui-icon-folder" disabled="$ctrl.disabled" block>
      <span class="oui-icon oui-icon-folder"></span>
      Call to action
    </oui-button>
    <oui-button variant="link" icon-right="oui-icon-folder" disabled="$ctrl.disabled" block>
      Call to action
      <span class="oui-icon oui-icon-folder"></span>
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Navigation',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-button variant="link" variant-nav="previous" disabled="$ctrl.disabled">
      Previous
    </oui-button>
    <oui-button variant="link" variant-nav="next" disabled="$ctrl.disabled">
      Next
    </oui-button>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  );
