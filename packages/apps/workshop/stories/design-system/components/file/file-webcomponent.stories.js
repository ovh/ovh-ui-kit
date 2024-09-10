import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Field from '@ovh-ux/ui-kit.field';
import File from '@ovh-ux/ui-kit.file';
import FormActions from '@ovh-ux/ui-kit.form-actions';
import Message from '@ovh-ux/ui-kit.message';

import readme from '@ovh-ux/ui-kit.file/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'file-webcomponent.stories';
angular.module(moduleName, [
  File,

  // For examples
  Field,
  FormActions,
  Message,
]);

export default {
  title: 'Design System/Components/File/WebComponent',

  parameters: {
    docs: { iframeHeight: 200 },
    notes: readme,
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

MultipleFiles.storyName = 'Multiple files';

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

MultipleWithPreview.storyName = 'Multiple with preview';

MultipleWithPreview.parameters = {
  notes: 'Preview works only with `image/*` files.',
};

export const DragDropArea = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple
      droparea>
    </oui-file>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

DragDropArea.storyName = 'Drag & Drop area';

export const DragDropAreaSingle = forModule(moduleName).createElement(
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

DragDropAreaSingle.storyName = 'Drag & Drop area single file';

export const DragDropWithPreview = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-file
      disabled="$ctrl.disabled"
      maxsize="150000"
      model="$ctrl.model"
      multiple
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

DragDropWithPreview.storyName = 'Drag & Drop with preview';

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="$ctrl.form">
      <oui-field label="Upload file" help-text="image/jpeg, image/png, image/gif (max size 150 KB)">
        <oui-file name="fileUpload"
          accept="image/jpeg,image/png,image/gif"
          disabled="$ctrl.disabled"
          maxsize="150000"
          model="$ctrl.model"
          required>
        </oui-file>
      </oui-field>

      <oui-form-actions disabled="$ctrl.form.fileUpload.$invalid"></oui-form-actions>
    </form>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
      },
    },
  ),
);

export const EventHandling = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-message
      type="info"
      ng-if="$ctrl.message">
      {{$ctrl.message}}
    </oui-message>
    <oui-file
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      multiple
      on-select="$ctrl.onSelect(modelValue)"
      on-remove="$ctrl.onRemove(modelValue)"
    >
    </oui-file>
    `,
    {
      $ctrl: new (class {
        constructor() {
          this.message = '';
        }

        onSelect(model) {
          const plural = model.length > 1;
          this.message = `You've selected a file ! Currently ${model.length} file${plural ? 's' : ''} selected`;
        }

        onRemove(model) {
          const plural = model.length > 1;
          this.message = `You've removed a file ! Currently ${model.length} file${plural ? 's' : ''} selected`;
        }
      })(),
    },
  ),
);

EventHandling.storyName = 'Trigger event on selection and deletion';
