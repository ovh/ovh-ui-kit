import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.textarea/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-textarea-stories';
angular.module(moduleName, ['oui.textarea']);

storiesOf('Old|Components/Textarea', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-textarea
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)"
      placeholder="Please insert your text..."
      readonly="$ctrl.readonly"
      rows="7">
    </oui-textarea>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        readonly: boolean('Read-only state', false),
        model: 'Lorem ipsum dolor sit amet',
        onChange: action('onClick'),
      },
    })),
  )
  .add(
    'Validations',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-textarea
      maxlength="250"
      model="$ctrl.model"
      placeholder="Please insert your text..."
      rows="7">
    </oui-textarea>
    `)),
  );
