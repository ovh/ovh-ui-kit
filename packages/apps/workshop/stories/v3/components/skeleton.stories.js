import { forModule } from 'storybook-addon-angularjs';

import Skeleton from '@ovh-ux/ui-kit.skeleton';

import readme from '@ovh-ux/ui-kit.skeleton/README.md';
import { compileTemplate } from '../../../src/utils';

const moduleName = 'oui-skeleton-stories';
angular.module(moduleName, [Skeleton]);

export default {
  title: 'Version 3/Components/Skeleton',

  parameters: {
    notes: readme,
  },
};

export const Default = forModule(moduleName).createElement(
  () => compileTemplate(
    `
  <oui-skeleton></oui-skeleton>`,
  ),
);

export const Sizes = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-skeleton size="xs"></oui-skeleton>
    <oui-skeleton size="s"></oui-skeleton>
    <oui-skeleton size="m"></oui-skeleton>
    <oui-skeleton size="l"></oui-skeleton>
    <oui-skeleton size="xl"></oui-skeleton>
    <oui-skeleton size="auto"></oui-skeleton>`,
  ),
);

export const RandomizedWidth = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>
    <oui-skeleton randomized></oui-skeleton>`,
  ),
);

RandomizedWidth.story = {
  name: 'Randomized width',
};
