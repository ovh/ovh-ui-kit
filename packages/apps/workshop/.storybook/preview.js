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
    showRoots: true,
    storySort: ([first], [second]) => {
      const [firstType] = first.split('-');
      const [secondType] = second.split('-');

      if (firstType === 'introduction') return -1;
      if (firstType === secondType) return 0;

      return 1;
    },
  },
});
