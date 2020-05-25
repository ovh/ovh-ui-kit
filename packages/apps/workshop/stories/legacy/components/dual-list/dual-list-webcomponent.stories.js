import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { forModule } from 'storybook-addon-angularjs';

import DualList from '@ovh-ux/ui-kit.dual-list';

import readme from '@ovh-ux/ui-kit.dual-list/README.md';
import { compileTemplate } from '../../../../src/utils';

import data from '../../../_data/dual-list.data.json';

// Create mock module for the stories
const moduleName = 'dual-list-webcomponent.stories';
angular.module(moduleName, [DualList]);

export default {
  title: 'Legacy/Components/Dual List/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const ArrayOfStrings = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-dual-list
      on-add="$ctrl.onAdd(item)"
      on-change="$ctrl.onChange(item)"
      on-remove="$ctrl.onRemove(item)"
      source="$ctrl.source"
      target="$ctrl.target">
      <oui-dual-list-source
        loading="$ctrl.sourceLoading"
        searchable="$ctrl.sourceSearchable">
      </oui-dual-list-source>
      <oui-dual-list-target
        loading="$ctrl.targetLoading"
        searchable="$ctrl.targetSearchable">
      </oui-dual-list-target>
    </oui-dual-list>`,
    {
      $ctrl: {
        onAdd: action('onAdd'),
        onChange: action('onChange'),
        onRemove: action('onRemove'),
        source: data.strings.source,
        sourceLoading: boolean('Source loading', false),
        sourceSearchable: boolean('Source searchable', true),
        target: data.strings.target,
        targetLoading: boolean('Target loading', false),
        targetSearchable: boolean('Target searchable', false),
      },
    },
  ),
);

ArrayOfStrings.story = {
  name: 'Array of strings',
};

export const ArrayOfObjects = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-dual-list
      on-add="$ctrl.onAdd(item)"
      on-change="$ctrl.onChange(item)"
      on-remove="$ctrl.onRemove(item)"
      source="$ctrl.source"
      target="$ctrl.target"
      property="name">
      <oui-dual-list-source
        loading="$ctrl.sourceLoading"
        searchable="$ctrl.sourceSearchable">
      </oui-dual-list-source>
      <oui-dual-list-target
        loading="$ctrl.targetLoading"
        searchable="$ctrl.targetSearchable">
      </oui-dual-list-target>
    </oui-dual-list>`,
    {
      $ctrl: {
        onAdd: action('onAdd'),
        onChange: action('onChange'),
        onRemove: action('onRemove'),
        source: data.objects.source,
        sourceLoading: boolean('Source loading', false),
        sourceSearchable: boolean('Source searchable', true),
        target: data.objects.target,
        targetLoading: boolean('Target loading', false),
        targetSearchable: boolean('Target searchable', false),
      },
    },
  ),
);

ArrayOfObjects.story = {
  name: 'Array of objects',
};

export const DeepNestedProperty = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-dual-list
      on-add="$ctrl.onAdd(item)"
      on-change="$ctrl.onChange(item)"
      on-remove="$ctrl.onRemove(item)"
      source="$ctrl.source"
      target="$ctrl.target"
      property="name.firstName">
      <oui-dual-list-source
        loading="$ctrl.sourceLoading"
        searchable="$ctrl.sourceSearchable">
      </oui-dual-list-source>
      <oui-dual-list-target
        loading="$ctrl.targetLoading"
        searchable="$ctrl.targetSearchable">
      </oui-dual-list-target>
    </oui-dual-list>`,
    {
      $ctrl: {
        onAdd: action('onAdd'),
        onChange: action('onChange'),
        onRemove: action('onRemove'),
        source: data.nestedObjects.source,
        sourceLoading: boolean('Source loading', false),
        sourceSearchable: boolean('Source searchable', true),
        target: data.nestedObjects.target,
        targetLoading: boolean('Target loading', false),
        targetSearchable: boolean('Target searchable', false),
      },
    },
  ),
);

DeepNestedProperty.story = {
  name: 'Deep nested property',
};
