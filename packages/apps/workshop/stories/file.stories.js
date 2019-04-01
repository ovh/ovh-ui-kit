import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../src/utils';

// Create mock module for the stories
const moduleName = 'oui-file-stories';
angular.module(moduleName, ['oui.file']);

storiesOf('Components/File', module)
  .add(
    'Simple file selector ',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-file model="$ctrl.model"></oui-file>
    `)),
  );
