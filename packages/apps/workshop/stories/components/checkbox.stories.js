import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

const moduleName = 'oui-checkbox-stories';
angular.module(moduleName, ['oui.checkbox', 'oui.field', 'oui.radio']);

storiesOf('Components/Checkbox', module)
  .add(
    'Simple checkbox',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox aria-label="Allow ponies in your server">Allow ponies in your server</oui-checkbox>
    <oui-checkbox aria-label="Track ponies">Track ponies</oui-checkbox>
    `)),
  )
  .add(
    'Enabling content with checkboxes',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-checkbox aria-label="Enable rainbows" model="$ctrl.checked">Enable rainbows</oui-checkbox>
    <oui-field label="Rainbow amount">
      <oui-radio-toggle-group model="$ctrl.amount">
        <oui-radio value="small" disabled="!$ctrl.checked">A subtle pinch</oui-radio>
        <oui-radio value="medium" disabled="!$ctrl.checked">A moderate amount</oui-radio>
        <oui-radio value="large" disabled="!$ctrl.checked">Everywhere!</oui-radio>
      </oui-radio-toggle-group>
    </oui-field>
    `, {
      $ctrl: {
        checked: boolean('Checked state', true),
      },
    })),
  );
