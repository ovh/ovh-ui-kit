module.exports = {
  stories: [
    '../stories/documentation/**/*',
    '../stories/design-system/**/*',
    '../stories/legacy/**/*',
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
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-viewport/register',
  ],
};
