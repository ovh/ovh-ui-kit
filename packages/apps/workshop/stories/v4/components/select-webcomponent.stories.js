import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Select from '@ovh-ux/ui-kit.select';

import readme from '@ovh-ux/ui-kit.select/README.md';
import { compileTemplate } from '../../../src/utils';

import countries from '../../_data/countries.data.json';

const moduleName = 'select-webcomponent.stories';
angular.module(moduleName, [
  Select,

  // For examples
  FormActions,
  Field,
]);

export default {
  title: 'Version 4/Components/Select/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="['a', 'b', 'c']"
      model="$ctrl.model"
      name="letter"
      placeholder="Select a letter..."
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()">
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

export const ArrayOfObjects = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country..."
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()">
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

ArrayOfObjects.story = {
  name: 'Array of objects',
};

export const Searchable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country..."
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()"
      searchable>
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

export const Multiple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disabled="$ctrl.disabled"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country..."
      on-blur="$ctrl.onBlur()"
      on-change="$ctrl.onChange(modelValue)"
      on-focus="$ctrl.onFocus()"
      multiple>
    </oui-select>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        items: countries,
        onBlur: action('onBlur'),
        onChange: action('onChange'),
        onFocus: action('onFocus'),
      },
    },
  ),
);

export const DisableItems = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      disable-items="$ctrl.disableItems($item)"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country...">
    </oui-select>`,
    {
      $ctrl: new (class {
        constructor() {
          this.items = countries;
        }

        disableItems($item) {
          const modulo = 2;
          return this.items.indexOf($item) % modulo === 1;
        }
      })(),
    },
  ),
);

DisableItems.story = {
  name: 'Disable items',
};

export const Grouping = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      group-by="$ctrl.groupByFirstLetter"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country...">
    </oui-select>`,
    {
      $ctrl: {
        items: countries,
        groupByFirstLetter: (item) => item.country.name.substr(0, 1).toUpperCase(),
      },
    },
  ),
);

export const CustomOptionTemplate = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-select
      group-by="$ctrl.groupByFirstLetter"
      items="$ctrl.items"
      match="country.name"
      model="$ctrl.model"
      name="country"
      placeholder="Select a country...">
      <span ng-bind="$item.country.name"></span><br />
      <small>
        Code: <span ng-bind="$item.country.code"></span>
      </small>
    </oui-select>`,
    {
      $ctrl: {
        items: countries,
        groupByFirstLetter: (item) => item.country.name.substr(0, 1).toUpperCase(),
      },
    },
  ),
);

CustomOptionTemplate.story = {
  name: 'Option template',
};

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Label">
        <oui-select
          disabled="$ctrl.disabled"
          items="['a', 'b', 'c']"
          model="$ctrl.model"
          name="letter"
          placeholder="Select a letter..."
          required>
        </oui-select>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);
