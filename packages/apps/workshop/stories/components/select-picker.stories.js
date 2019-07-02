import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-select-picker-stories';
angular.module(moduleName, ['oui.select-picker']);

storiesOf('Documentation|Components/Select Picker', module)
  .add(
    'Basic',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Value A or B"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values1">
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Value C"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values2">
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      placeholder="Select"
      label="Value D, E or F"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values3">
    </oui-select-picker>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: { id: 'a', name: 'Value A' },
        onChange: action('onChange'),
        values1: [{ id: 'a', name: 'Value A' }, { id: 'b', name: 'Value B' }],
        values2: [{ id: 'c', name: 'Value C' }],
        values3: [{ id: 'd', name: 'Value D' }, { id: 'e', name: 'Value E' }, { id: 'f', name: 'Value F' }],
      },
    })),
  )
  .add(
    'Variant (Light)',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Value A or B"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values1"
      variant="light">
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Value C"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values2"
      variant="light">
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      placeholder="Select"
      label="Value D, E or F"
      on-change="$ctrl.onChange(modelValue)"
      values="$ctrl.values3"
      variant="light">
    </oui-select-picker>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: { id: 'a', name: 'Value A' },
        onChange: action('onChange'),
        values1: [{ id: 'a', name: 'Value A' }, { id: 'b', name: 'Value B' }],
        values2: [{ id: 'c', name: 'Value C' }],
        values3: [{ id: 'd', name: 'Value D' }, { id: 'e', name: 'Value E' }, { id: 'f', name: 'Value F' }],
      },
    })),
  )
  .add(
    'With description',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Label"
      description="Description"
      values="$ctrl.values1">
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Label"
      description="Description"
      values="$ctrl.values2">
    </oui-select-picker>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: { id: 'a', name: 'Value A' },
        values1: [{ id: 'a', name: 'Value A' }],
        values2: [{ id: 'b', name: 'Value B' }],
      },
    })),
  )
  .add(
    'With section',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Label"
      description="Description"
      values="$ctrl.values1">
      <oui-select-picker-section>Section 1</oui-select-picker-section>
      <oui-select-picker-section>Section 2</oui-select-picker-section>
    </oui-select-picker>

    <oui-select-picker
      disabled="$ctrl.disabled"
      name="ouiSelectPicker1"
      match="name"
      model="$ctrl.model"
      label="Label"
      description="Description"
      values="$ctrl.values2">
      <oui-select-picker-section>Section 1</oui-select-picker-section>
      <oui-select-picker-section>Section 2</oui-select-picker-section>
    </oui-select-picker>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: { id: 'a', name: 'Value A' },
        values1: [{ id: 'a', name: 'Value A' }],
        values2: [{ id: 'b', name: 'Value B' }],
      },
    })),
  );
