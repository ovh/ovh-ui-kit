import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-collapsible-stories';
angular.module(moduleName, ['oui.collapsible']);

storiesOf('Documentation|Components/Collapsible', module)
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-collapsible
      heading="Title"
      aria-label="Action"
      expanded="$ctrl.expanded"
      on-toggle="$ctrl.onToggle(expanded)">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis semper ligula nec fringilla tempor. In rhoncus
      ullamcorper feugiat. Phasellus vel ipsum vitae neque
      varius luctus. Proin id iaculis arcu. Fusce justo arcu,
      egestas vel nulla nec, dictum cursus lacus. Aenean
      elementum vel odio quis rutrum. In quis tellus in neque
      vulputate rhoncus vitae ut justo. Ut dignissim varius est
      in consequat. Donec nisi mauris, pellentesque condimentum
      congue in, blandit ut arcu. In et elit ipsum.
    </oui-collapsible>
    `, {
      $ctrl: {
        expanded: boolean('Expanded state', false),
        onToggle: action('onToggle'),
      },
    })),
  );
