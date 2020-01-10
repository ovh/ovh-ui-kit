import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.file/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-file-stories';
angular.module(moduleName, [
  'oui.file',

  // For examples
  'oui.field',
  'oui.button',
]);

storiesOf('Old|Components/File', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple file selector ',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-file
      disabled="$ctrl.disabled"
      placeholder="Select a file..."
      model="$ctrl.model">
    </oui-file>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'File restriction ',
    forModule(moduleName).createElement(() => compileTemplate(`
    <form novalidate name="fileForm">
      <oui-field label="Upload file" help-text="image/jpeg, image/png, image/gif (max size 150 KB)">
        <oui-file name="fileUpload"
          accept="image/jpeg,image/png,image/gif"
          disabled="$ctrl.disabled"
          maxsize="150000"
          model="$ctrl.model"
          required>
        </oui-file>
      </oui-field>
      <p><strong>fileForm.$valid value:</strong> {{fileForm.$valid | json}}</p>
      <p><strong>fileForm.$submitted value:</strong> {{fileForm.$submitted | json}}</p>
      <p><strong>fileForm["fileUpload"].$error value:</strong> {{fileForm["fileUpload"].$error | json}}</p>
      <oui-button type="submit">Submit</oui-button>
    </form>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Multiple files',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple>
    </oui-file>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Multiple with preview',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple
      preview>
    </oui-file>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })), {
      notes: 'Preview works only with `image/*` files.',
    },
  )
  .add(
    'Drag & Drop area',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      droparea>
    </oui-file>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })),
  )
  .add(
    'Drag & Drop with preview',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      droparea
      preview>
    </oui-file>
    `, {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    })), {
      notes: 'Preview works only with `image/*` files.',
    },
  );
