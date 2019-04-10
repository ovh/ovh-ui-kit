import '@storybook/addon-console';
import { addParameters, addDecorator, configure } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { withCenteredLayout } from '../src/utils'

// Load global style to avoid styles duplicate from style loader
import '@ovh-ux/ui-kit-builder/src/index.js';
import '@ovh-ux/ui-kit-builder/src/index.less';

// Addons
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withCenteredLayout);

// Options
addParameters({
  options: {
    name: 'OVH UI Kit',
    panelPosition: 'bottom',
  },
});

// Automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
