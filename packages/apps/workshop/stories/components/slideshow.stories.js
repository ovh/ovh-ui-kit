import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.slideshow/README.md';
import { compileTemplate } from '../../src/utils';

// Create mock module for the stories
const moduleName = 'oui-slideshow-stories';
angular.module(moduleName, ['oui.slideshow']);

storiesOf('Components/Slideshow', module)
  .addParameters({
    notes: readme,
  })
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-slideshow
      loading="$ctrl.loading"
      loop="$ctrl.loop"
      on-dismiss="$ctrl.onDismiss()"
      on-panel-change="$ctrl.onPanelChange(direction, index)">
      <oui-slideshow-panel
        heading="New feature"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg">
        Display your infrastructure as a list
      </oui-slideshow-panel>
      <oui-slideshow-panel
        heading="Introducing Ad-Sync"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
        on-click="$ctrl.onPanelClick('Panel 2')"
        label="Discover">
        Designed to help you synchronize your local Active Directory with your OVH Active Directory.
      </oui-slideshow-panel>
      <oui-slideshow-panel
        heading="New features available in your emails pages"
        on-click="$ctrl.onPanelClick('Panel 3')"
        label="Discover">
        Introducing Ad-Sync, designed to help you synchronize your local Active Directory with your OVH Active Directory.
      </oui-slideshow-panel>
      <oui-slideshow-panel
        heading="Introducing Ad-Sync"
        picture="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cercle_rouge_100%25.svg"
        on-click="$ctrl.onPanelClick('Panel 4')"
        label="Discover">
        Designed to help you synchronize your local Active Directory with your OVH Active Directory.
      </oui-slideshow-panel>
    </oui-slideshow>
    `, {
      $ctrl: {
        loading: boolean('Loading state', false),
        loop: boolean('Loop panels'),
        onDismiss: action('onDismiss'),
        onPanelChange: action('onPanelChange'),
        onPanelClick: action('onPanelClick'),
      },
    })),
  );
