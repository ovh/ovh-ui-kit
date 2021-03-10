import { forModule } from 'storybook-addon-angularjs';

import '@ovh-ux/ui-kit/dist/js/oui-spinner';

import readme from '@ovh-ux/ui-kit.spinner/README.md';
import { compileTemplate } from '../../../../src/utils';

const moduleName = 'spinner-webcomponent.stories';
angular.module(moduleName, ['oui.spinner']);

export default {
  title: 'Design System/Components/Spinner/WebComponent',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-spinner></oui-spinner>`,
  ),
);

export const Sizes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div>
      <oui-spinner size="s"></oui-spinner>
    </div>
    <div>
      <oui-spinner size="m"></oui-spinner>
    </div>
    <div>
      <oui-spinner size="l"></oui-spinner>
    </div>`,
  ),
);
