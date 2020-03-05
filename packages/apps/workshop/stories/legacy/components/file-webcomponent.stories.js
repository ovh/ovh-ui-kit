import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Button from '@ovh-ux/ui-kit.button';
import Field from '@ovh-ux/ui-kit.field';
import File from '@ovh-ux/ui-kit.file';

import readme from '@ovh-ux/ui-kit.file/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'file-webcomponent.stories';
angular.module(moduleName, [
  File,

  // For examples
  Field,
  Button,
]);

export default {
  title: 'Legacy/Components/File/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const SimpleFileSelector = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      placeholder="Select a file..."
      model="$ctrl.model">
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

SimpleFileSelector.story = {
  name: 'Simple file selector ',
};

export const FileRestriction = forModule(moduleName).createElement(
  () => compileTemplate(
    `
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
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

FileRestriction.story = {
  name: 'File restriction ',
};

export const MultipleFiles = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple>
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

MultipleFiles.story = {
  name: 'Multiple files',
};

export const MultipleWithPreview = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple
      preview>
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

MultipleWithPreview.story = {
  name: 'Multiple with preview',

  parameters: {
    notes: 'Preview works only with `image/*` files.',
  },
};

export const DragDropArea = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      droparea>
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

DragDropArea.story = {
  name: 'Drag & Drop area',
};

export const DragDropWithPreview = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      droparea
      preview>
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

DragDropWithPreview.story = {
  name: 'Drag & Drop with preview',

  parameters: {
    notes: 'Preview works only with `image/*` files.',
  },
};
