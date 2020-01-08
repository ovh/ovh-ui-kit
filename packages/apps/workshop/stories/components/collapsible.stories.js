import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.collapsible/README.md';
import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-collapsible-stories';
angular.module(moduleName, ['oui.collapsible']);

storiesOf('Components/Collapsible', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Default',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-collapsible
      heading="Title"
      aria-label="Action"
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
        onToggle: action('onToggle'),
      },
    })),
  )
  .add(
    'Loading',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-collapsible
      heading="Click to load content"
      loading="$ctrl.loading"
      aria-label="Action"
      expanded="$ctrl.expanded"
      on-toggle="$ctrl.onToggle(expanded, this)">
      <span ng-bind="$ctrl.content"></span>
    </oui-collapsible>
    `, {
      $ctrl: new class {
        constructor() {
          this.delay = 1000;
          this.expanded = false;
        }

        getContent() {
          // Simulate deferred promise
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis semper ligula nec fringilla tempor. In rhoncus
              ullamcorper feugiat. Phasellus vel ipsum vitae neque
              varius luctus. Proin id iaculis arcu. Fusce justo arcu,
              egestas vel nulla nec, dictum cursus lacus. Aenean
              elementum vel odio quis rutrum. In quis tellus in neque
              vulputate rhoncus vitae ut justo. Ut dignissim varius est
              in consequat. Donec nisi mauris, pellentesque condimentum
              congue in, blandit ut arcu. In et elit ipsum.`);
            }, this.delay + 1000 * Math.random());
          });
        }

        onToggle(expanded, scope) {
          if (!this.content && expanded) {
            this.loading = true;

            // Simulate a promise with a timeout
            this.getContent()
              .then((content) => {
                this.loading = false;
                this.content = content;

                // Need to $digest to apply the changes with the timeout
                scope.$digest();
              });
          }
        }
      }(),
    })),
  );
