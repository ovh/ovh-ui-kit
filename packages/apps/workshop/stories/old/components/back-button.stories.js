import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.back-button/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-back-button-stories';
angular.module(moduleName, ['oui.back-button']);

storiesOf('Old/Components/Back Button', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-back-button
        href="#"
        aria-label="Aria label for heading"
        on-click="$ctrl.onClick()">
        {{ $ctrl.text }}
      </oui-back-button>
    `,
    {
      $ctrl: {
        text: text('Text', 'Lorem ipsum dolor sit amet'),
        onClick: action('onClick'),
      },
    })),
  );
