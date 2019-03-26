import { addParameters, addDecorator, configure } from "@storybook/html";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/html';

import '@ovh/ui-kit/src/index.js';
import '@ovh/ui-kit/src/index.less';

// Addons
addDecorator(centered);
addDecorator(withA11y);
addDecorator(withKnobs);

// Options
addParameters({
  options: {
    name: 'OVH UI Kit',
    panelPosition: 'right',
  },
});

// Automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
