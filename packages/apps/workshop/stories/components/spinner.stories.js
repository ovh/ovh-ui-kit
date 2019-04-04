import { storiesOf } from '@storybook/html';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

const moduleName = 'oui-spinner-stories';
angular.module(moduleName, ['oui.spinner']);

storiesOf('Components/Spinner', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-spinner></oui-spinner>
    `)),
  )
  .add(
    'Sizes',
    forModule(moduleName).createElement(() => compileTemplate(`
    <div>
      <oui-spinner size="s"></oui-spinner>
    </div>
    <div>
      <oui-spinner size="m"></oui-spinner>
    </div>
    <div>
      <oui-spinner size="l"></oui-spinner>
    </div>
    `)),
  );
