import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';
import centered from '@storybook/addon-centered/html';

storiesOf('Components/Clipboard', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add(
    'default',
    forModule('oui.clipboard').createElement((compile) => {
      const model = text('Model', 'Copy this text');

      return compile`
        <oui-clipboard model="${model}"></oui-clipboard>
      `;
    }),
  );
