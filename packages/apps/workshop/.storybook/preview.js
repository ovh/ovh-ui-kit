import '@storybook/addon-console';
import { addParameters, addDecorator } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

import 'angular';
import 'angular-aria';
import 'angular-sanitize';

// Load src for livereload
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
    panelPosition: 'right',
    showRoots: true,
    storySort: ([,a], [,b]) => {
      if (a.kind === b.kind) return 0;

      // Put first elements with lower subfolder
      if (a.kind.split('/').length < b.kind.split('/').length) return -1;
      if (a.kind.split('/').length > b.kind.split('/').length) return 1;

      // Put Documentation group first
      if (a.id.startsWith('documentation-') && !b.id.startsWith('documentation-')) return -1;
      if (!a.id.startsWith('documentation-') && b.id.startsWith('documentation-')) return 1;

      // The put Introduction files first
      if (a.id.endsWith('-introduction--page') && !b.id.endsWith('-introduction--page')) return -1;
      if (!a.id.endsWith('-introduction--page') && b.id.endsWith('-introduction--page')) return 1;

      // Then put others MDX files after
      if (a.id.endsWith('--page') && !b.id.endsWith('--page')) return -1;
      if (!a.id.endsWith('--page') && b.id.endsWith('--page')) return 1;

      // Then let the compare manage the ordering
      return a.id.localeCompare(b.id, undefined, { numeric: true });
    },
  },
});
