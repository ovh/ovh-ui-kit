import '@storybook/addon-console';
import { addParameters, addDecorator } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

import 'angular';
import 'angular-aria';
import 'angular-sanitize';

// Load src for livereload
import '@ovh-ux/ui-kit-builder';
import '../src/index.less';

// Addons
addDecorator(withA11y);
addDecorator(withKnobs);

// Options
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    name: 'OVH UI Kit',
    panelPosition: 'bottom',
    storySort: (a, b) => {
      if (a[0].includes('old-')) {
        return 1;
      }

      return 0;
    },
  },
});
