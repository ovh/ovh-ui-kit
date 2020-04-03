import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import File from '@ovh-ux/ui-kit.file';
import FormActions from '@ovh-ux/ui-kit.form-actions';

import readme from '@ovh-ux/ui-kit.file/README.md';
import { compileTemplate } from '../../../src/utils';

// Create mock module for the stories
const moduleName = 'file-webcomponent.stories';
angular.module(moduleName, [
  File,

  // For examples
  Field,
  FormActions,
]);

export default {
  title: 'Design System/Components/File/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      model="$ctrl.model">
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

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
};

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Upload file" help-text="image/jpeg, image/png, image/gif (max size 150 KB)">
        <oui-file name="fileUpload"
          accept="image/jpeg,image/png,image/gif"
          disabled="$ctrl.disabled"
          maxsize="150000"
          model="$ctrl.model"
          required>
        </oui-file>
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
