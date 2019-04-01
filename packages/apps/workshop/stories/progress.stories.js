import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../src/utils';

const moduleName = 'oui-progress-stories';
angular.module(moduleName, ['oui.progress']);

storiesOf('Components/Progress', module)
  .add(
    'Simple progress',
    forModule(moduleName).createElement(() => compileTemplate(`
      <oui-progress>
        <oui-progress-bar type="info" value="$ctrl.percentage"></oui-progress-bar>
      </oui-progress>
    `, {
      $ctrl: {
        percentage: 50,
      },
    })),
  );
