import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.clipboard/README.md';
import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-clipboard-stories';
angular.module(moduleName, ['oui.clipboard']);

storiesOf('Components/Clipboard', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-clipboard model="$ctrl.model"></oui-clipboard>
    `, {
      $ctrl: {
        model: text('Model', 'Copy this text'),
      },
    })),
  );
