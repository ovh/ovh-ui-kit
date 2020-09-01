import '@storybook/addon-console';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';

import 'angular';
import 'angular-aria';
import 'angular-sanitize';

import anysort from 'anysort'

// Load src for livereload
import '../src/index.less';

// Addons
export const decorators = [
  withKnobs,
];

// Options
export const parameters = {
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    extractComponentDescription: (component, { notes }) => {
      if (notes) {
        return typeof notes === 'string' ? notes : notes.markdown || notes.text;
      }
      return null;
    },
  },
  // layout: 'centered',
  options: {
    name: 'OVHcloud UI Kit',
    panelPosition: 'right',
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Documentation/Introduction',
        'Documentation/Chagelog',
        'Documentation/**',
        'Design System/Content/**',
        'Design System/Components/**/Introduction',
        'Design System/Components/**',
        'Design System/Directives/**/Introduction',
        'Design System/Directives/**',
        'Design System/Helpers/**',
        'Legacy/**/Introduction',
        'Legacy/**',
      ])
    },
  },
};
