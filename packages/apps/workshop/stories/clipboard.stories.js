import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

// Create mock module for the stories
const moduleName = 'oui-clipboard-stories';
angular.module(moduleName, ['oui.clipboard']);

storiesOf('Molecules/Clipboard', module)
  .add(
    'Simple clipboard',
    forModule(moduleName).createElement((compile) => {
      const model = text('Model', 'Copy this text');

      return compile`
        <oui-clipboard model="${model}"></oui-clipboard>
      `;
    }),
  );
