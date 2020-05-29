import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import Collapsible from '@ovh-ux/ui-kit.collapsible';

import readme from '@ovh-ux/ui-kit.collapsible/README.md';
import { compileTemplate } from '../../../../src/utils';

// Create mock module for the stories
const moduleName = 'collapsible-webcomponent.stories';
angular.module(moduleName, [Collapsible]);

export default {
  title: 'Design System/Components/Collapsible/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
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
    </oui-collapsible>`,
    {
      $ctrl: {
        onToggle: action('onToggle'),
      },
    },
  ),
);

export const Loading = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-collapsible
      heading="Click to load content"
      loading="$ctrl.loading"
      aria-label="Action"
      expanded="$ctrl.expanded"
      on-toggle="$ctrl.onToggle(expanded, this)">
      <span ng-bind="$ctrl.content"></span>
    </oui-collapsible>`,
    {
      $ctrl: new (class {
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
          // Knobs for Storybook
          action('onToggle')(expanded);

          if (!this.content && expanded) {
            this.loading = true;

            // Simulate a promise with a timeout
            this.getContent().then((content) => {
              this.loading = false;
              this.content = content;

              // Need to $digest to apply the changes with the timeout
              // Could be resolved with $timeout or $q too
              scope.$digest();
            });
          }
        }
      })(),
    },
  ),
);

export const GroupAccordion = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <div style="max-width: 300px;">
      <oui-collapsible
        heading="Title"
        group="lorem"
        on-toggle="$ctrl.onToggle('Collapsible 1', expanded)">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Veniam eveniet, commodi nisi officia iusto minus repellat
        magnam in vel? Nisi, ea? Nam cupiditate sint ullam temporibus
        perspiciatis, nostrum pariatur amet?
      </oui-collapsible>

      <oui-collapsible
        heading="Title"
        group="lorem"
        on-toggle="$ctrl.onToggle('Collapsible 2', expanded)">
        Corporis dicta porro labore repellendus accusantium.
        Aperiam dolore velit corrupti ex accusantium nihil doloremque
        rerum voluptate reprehenderit cum molestias cumque mollitia obcaecati,
        est saepe quod dolorum magni non quidem aliquid?
      </oui-collapsible>

      <oui-collapsible
        heading="Title"
        group="lorem"
        on-toggle="$ctrl.onToggle('Collapsible 3', expanded)">
        Ut dolore commodi dolorem veniam. Fugiat tempora sunt officiis
        dolores officia eveniet blanditiis minus nisi quaerat voluptate
        maxime necessitatibus voluptas qui rerum, incidunt illo amet
        quae eius error. Autem, impedit.
      </oui-collapsible>

      <oui-collapsible
        heading="Title"
        group="lorem"
        on-toggle="$ctrl.onToggle('Collapsible 4', expanded)">
        Non, laborum enim. Magni commodi dolorem sit necessitatibus incidunt,
        iste rerum est mollitia quod voluptatem autem aspernatur illum obcaecati
        quos laboriosam, repudiandae numquam nostrum voluptate,
        in adipisci? Quis, autem repudiandae!
      </oui-collapsible>
    </div>`,
    {
      $ctrl: {
        onToggle: action('onToggle'),
      },
    },
  ),
);

GroupAccordion.story = {
  name: 'Group (Accordion)',
};
