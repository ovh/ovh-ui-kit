import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import Clipboard from '@ovh/ui-kit.clipboard';
import '@ovh/ui-kit.clipboard/src/index.less';

storiesOf('Molecules/Clipboard', module)
  .add(
    'Simple clipboard',
    forModule(Clipboard).createElement((compile) => {
      const model = text('Model', 'Copy this text');

      return compile`
        <oui-clipboard model="${model}"></oui-clipboard>
      `;
    }),
  );
