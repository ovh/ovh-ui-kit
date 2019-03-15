import '@ovh/ui-kit';
import '@ovh/ui-kit/dist/css/oui.css';

import { addParameters, configure } from "@storybook/html";

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
