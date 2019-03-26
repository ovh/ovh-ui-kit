import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

// Create mock module for the stories
const moduleName = 'oui-file-stories';
angular.module(moduleName, ['oui.file']);

storiesOf('Organisms/File', module)
  .add(
    'Simple file selector ',
    forModule(moduleName).createElement(compile => compile`
      <oui-file model="$ctrl.model"></oui-file>
    `),
  );
