module.exports = {
  stories: [
    '../stories/v4/**/*.stories.js',
    '../stories/v3/**/*.stories.js',
  ],
  addons: [
    // For panels
    // Order of imports defined tabs order in Storybook
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-a11y/register',

    // For toolbar
    '@storybook/addon-docs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
  ],
};
