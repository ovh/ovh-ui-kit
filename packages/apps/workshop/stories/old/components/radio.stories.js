import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-radio-stories';
angular.module(moduleName, ['oui.radio']);

storiesOf('Old|Components/Radio', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      Value A
    </oui-radio>

    <oui-radio
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2">
      Value B
    </oui-radio>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'With description',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value1">
      Value A
    </oui-radio>
    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      on-change="$ctrl.onChange(modelValue)"
      value="$ctrl.value2">
      Value B
    </oui-radio>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'Thumbnails',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      value="a"
      thumbnail>
      Thumbnail
    </oui-radio>
    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      variant="light"
      value="b"
      thumbnail>
      Thumbnail Light
    </oui-radio>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Size',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      size="m">
      Medium
    </oui-radio>
    <oui-radio
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      size="m"
      thumbnail>
      Thumbnail
    </oui-radio>
    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      size="m"
      variant="light"
      thumbnail>
      Thumbnail Light
    </oui-radio>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'With Footer',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      footer="Lorem ipsum dolor sit amet"
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      size="m"
      thumbnail>
      Thumbnail
    </oui-radio>
    <oui-radio
      description="Pellentesque euismod magna rutrum lectus gravida semper."
      footer="Lorem ipsum dolor sit amet"
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      name="oui-radio-1"
      size="m"
      variant="light"
      thumbnail>
      Thumbnail Light
    </oui-radio>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'In group',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio-group
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)">
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value1">
        Value A
      </oui-radio>
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value2">
        Value B
      </oui-radio>
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value3">
        Value C
      </oui-radio>
    </oui-radio-group>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        value3: 'c',
        onChange: action('onChange'),
      },
    })),
  )
  .add(
    'In toggle group',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-radio-toggle-group
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)">
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value1">
        Value A
      </oui-radio>
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value2">
        Value B
      </oui-radio>
      <oui-radio
        disabled="$ctrl.disabled"
        value="$ctrl.value3">
        Value C
      </oui-radio>
    </oui-radio-toggle-group>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        model: 'a',
        value1: 'a',
        value2: 'b',
        value3: 'c',
        onChange: action('onChange'),
      },
    })),
  );
