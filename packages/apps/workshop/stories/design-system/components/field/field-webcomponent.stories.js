import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-field';
import '@ovh-ux/ui-kit/dist/js/oui-form-actions';

import readme from '@ovh-ux/ui-kit.field/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'field-webcomponent.stories';
angular.module(moduleName, [
  'oui.field',
  'oui.form-actions',
]);

export default {
  title: 'Design System/Components/Field/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
      <oui-field label="Label">
        <input class="oui-input"
          name="field"
          placeholder="Please insert your text..."
          type="text"
          value="Lorem ipsum dolor sit amet">
      </oui-field>`,
  ),
);

export const LabelPopover = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-field label="Label"
      label-popover="Lorem ipsum dolor sit amet">
      <input class="oui-input"
        name="field"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>`,
  ),
);

export const HelpText = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-field label="Label"
      help-text="Lorem ipsum dolor sit amet">
      <input class="oui-input"
        name="field"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>`,
  ),
);

export const Sizes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-field label="Label"
      size="xs">
      <input class="oui-input"
        name="field-xs"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>
    <oui-field label="Label"
      size="s">
      <input class="oui-input"
        name="field-s"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>
    <oui-field label="Label"
      size="m">
      <input class="oui-input"
        name="field-m"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>
    <oui-field label="Label"
      size="l">
      <input class="oui-input"
        name="field-l"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>
    <oui-field label="Label"
      size="xl">
      <input class="oui-input"
        name="field-xl"
        placeholder="Please insert your text..."
        type="text"
        value="Lorem ipsum dolor sit amet">
    </oui-field>`,
  ),
);

export const Validation = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <form novalidate name="form">
      <oui-field label="Label">
        <input class="oui-input"
          name="field"
          placeholder="Please insert your text..."
          type="text"
          ng-model="$ctrl.model"
          required>
      </oui-field>

      <oui-form-actions></oui-form-actions>
    </form>`,
  ),
);
