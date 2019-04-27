import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

import { properties } from '../_data/criteria.data.json';

// Create mock module for the stories
const moduleName = 'oui-criteria-stories';
angular.module(moduleName, ['oui.criteria']);

storiesOf('Internal/Criteria', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-criteria
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="onChange(modelValue)"
      properties="$ctrl.properties">
    </oui-criteria>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        properties,
      },
    })),
  )
  .add(
    'With a search field',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-criteria
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      properties="$ctrl.properties"
      searchable>
    </oui-criteria>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        properties,
      },
    })),
  );
