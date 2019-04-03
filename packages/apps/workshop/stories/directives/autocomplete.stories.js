import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

import { strings, objects } from '../_data/autocomplete.data.json';

// Create mock module for the stories
const moduleName = 'oui-autocomplete-stories';
angular.module(moduleName, ['oui.autocomplete']);

storiesOf('Directives/Autocomplete', module)
  .add(
    'Array of strings',
    forModule(moduleName).createElement(() => compileTemplate(`
    <input
      type="text"
      class="oui-input oui-input_inline"
      placeholder="Search country name"
      ng-model="$ctrl.model"
      oui-autocomplete="$ctrl.suggestions"
      oui-autocomplete-on-select="$ctrl.onAutocomplete(value)">
    `, {
      $ctrl: {
        suggestions: strings,
        onAutocomplete: (value) => {
          console.log('onAutocomplete', value);
        },
      },
    })),
  )
  .add(
    'Array of objects',
    forModule(moduleName).createElement(() => compileTemplate(`
    <input
      type="text"
      class="oui-input oui-input_inline"
      placeholder="Search country name"
      ng-model="$ctrl.model"
      oui-autocomplete="$ctrl.suggestions"
      oui-autocomplete-property="country.name"
      oui-autocomplete-on-select="$ctrl.onAutocomplete(value)">
    `, {
      $ctrl: {
        suggestions: objects,
        onAutocomplete: (value) => {
          console.log('onAutocomplete', value);
        },
      },
    })),
  );
