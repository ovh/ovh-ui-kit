module.exports = {
  stories: [
    '../stories/documentation/**/*',
    '../stories/design-system/**/*',
    '../stories/legacy/**/*',
  ],
  addons: [
    // For panels
    // Order of imports defined tabs order in Storybook
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',

    // For toolbar
    '@storybook/addon-docs/register',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
  ],
};
