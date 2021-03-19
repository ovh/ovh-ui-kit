import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Timepicker from '@ovh-ux/ui-kit.timepicker';

import readme from '@ovh-ux/ui-kit.timepicker/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'timepicker-webcomponent.stories';
angular.module(moduleName, [Timepicker]);

export default {
  title: 'Design System/Components/Timepicker/WebComponent',

  parameters: {
    docs: { iframeHeight: 300 },
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-timepicker
      disabled="$ctrl.disabled"
      model="$ctrl.model"
      on-change="$ctrl.onChange(modelValue)"
      on-close="$ctrl.onClose(modelValue)"
      on-open="$ctrl.onOpen(modelValue)"
      placeholder="HH:MM">
    </oui-timepicker>`,
    {
      $ctrl: {
        disabled: boolean('Disabled state', false),
        onChange: action('onChange'),
        onClose: action('onClose'),
        onOpen: action('onOpen'),
      },
    },
  ),
);

export const Inline = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <p>
        <oui-timepicker model="$ctrl.inlineModel" inline></oui-timepicker>
    </p>
    <p>
        <oui-timepicker model="$ctrl.inlineModel" inline enable-seconds></oui-timepicker>
    </p>
    <p>
        <oui-timepicker model="$ctrl.inlineModel" inline enable-am-pm></oui-timepicker>
    </p>
    <p>
        <oui-timepicker model="$ctrl.inlineModel" inline enable-seconds enable-am-pm></oui-timepicker>
    </p>`,
  ),
);
