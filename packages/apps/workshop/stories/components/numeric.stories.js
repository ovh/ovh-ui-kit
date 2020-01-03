import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.numeric/README.md';
import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-numeric-stories';
angular.module(moduleName, ['oui.numeric']);

storiesOf('Components/Numeric', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-numeric
      model="$ctrl.model"
      disabled="$ctrl.disabled"
      on-change="$ctrl.onChange(modelValue)">
    </oui-numeric>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'Limits',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-numeric
      min="2"
      max="8"
      model="$ctrl.model">
    </oui-numeric>
    `)),
  );
