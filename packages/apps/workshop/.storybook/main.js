module.exports = {
  stories: [
    '../stories/design-system/**/*.stories.js',
    '../stories/legacy/**/*.stories.js',
  ],
  addons: [
    // For panels
    // Order of imports defined tabs order in Storybook
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',

    // For toolbar
    '@storybook/addon-docs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
  ],
};
