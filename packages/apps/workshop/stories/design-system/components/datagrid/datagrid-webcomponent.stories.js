import find from 'lodash/find';
import map from 'lodash/map';
import pick from 'lodash/pick';

import ActionMenu from '@ovh-ux/ui-kit.action-menu';
import Datagrid from '@ovh-ux/ui-kit.datagrid';

import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import readme from '@ovh-ux/ui-kit.datagrid/README.md';
import { compileTemplate } from '../../../../src/utils';

import data from '../../../_data/datagrid/index.data.json';

// Create mock module for the stories
const moduleName = 'datagrid-webcomponent.stories';
angular.module(moduleName, [
  Datagrid,

  // For examples
  ActionMenu,
]);

export default {
  title: 'Design System/Components/Datagrid/WebComponent',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Simple = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
      },
    },
  ),
);

export const Pagination = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      on-page-change="$ctrl.onPageChange($pagination)">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onPageChange: action('onPageChange'),
      },
    },
  ),
);

export const EmptyPlaceholer = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data: [],
      },
    },
  ),
);

EmptyPlaceholer.story = {
  name: 'Empty placeholer',
};

export const WithTopbar = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-topbar>
        <oui-action-menu text="Actions">
          <oui-action-menu-item aria-label="Persons: add item">Add person</oui-action-menu-item>
          <oui-action-menu-item aria-label="Persons: other action">Other action</oui-action-menu-item>
        </oui-action-menu>
      </oui-datagrid-topbar>
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
      },
    },
  ),
);

WithTopbar.story = {
  name: 'With topbar',
};

export const WithFooter = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName" footer="Lorem"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" footer="Ipsum"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
      },
    },
  ),
);

WithFooter.story = {
  name: 'With footer',
};

export const Sortable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      on-sort-change="$ctrl.onSortChange($sort)">
      <oui-datagrid-column title="'First name'" property="firstName" sortable="asc"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" sortable></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onSortChange: action('onSortChange'),
      },
    },
  ),
);

export const SearchAndFiltering = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      on-criteria-change="$ctrl.onCriteriaChange($criteria)">
      <oui-datagrid-column title="'First name'" property="firstName" searchable filterable></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" searchable filterable></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onCriteriaChange: action('onCriteriaChange'),
      },
    },
  ),
);

SearchAndFiltering.story = {
  name: 'Search and filtering',
};

export const SelectableRows = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      on-row-select="$ctrl.onRowSelect($row, $rows)"
      selectable-rows>
      <oui-datagrid-topbar>
        You have selected {{ $selectedRows.length }} row(s).
      </oui-datagrid-topbar>
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-action-menu align="end" compact>
        <oui-action-menu-item disabled="$isSelected">Disabled if selected</oui-action-menu-item>
      </oui-action-menu>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onRowSelect: action('onRowSelect'),
      },
    },
  ),
);

SelectableRows.story = {
  name: 'Selectable rows',
};

export const ExpandableRows = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      rows="$ctrl.data"
      page-size="5">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-datagrid-row-detail>
        Birth date : <span ng-bind="$row.birth"></span>
        <br />
        Parents :
        <span ng-bind="$row.parents.mother.firstName"></span> <span ng-bind="$row.parents.mother.lastName"></span> - <span ng-bind="$row.parents.father.firstName"></span> <span ng-bind="$row.parents.father.lastName"></span>
      </oui-datagrid-row-detail>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
      },
    },
  ),
);

ExpandableRows.story = {
  name: 'Expandable rows',
};

export const RowActions = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-action-menu text="Actions" compact>
        <oui-action-menu-item
          on-click="$ctrl.onActionClick($row)">
          Action
        </oui-action-menu-item>
      </oui-action-menu>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onActionClick: action('onActionClick'),
      },
    },
  ),
);

RowActions.story = {
  name: 'Row actions',
};

export const CustomizableColumnsDisplay = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      customizable>
      <oui-datagrid-column title="'First name'" property="firstName" prevent-customization></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" prevent-customization></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        onColumnsParametersChange: action('onColumnsParametersChange'),
      },
    },
  ),
);

CustomizableColumnsDisplay.story = {
  name: 'Customizable columns display',
};

export const CustomizableCellsTemplate = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      selectable-rows>
      <oui-datagrid-column title="'Index'">
        {{$rowIndex}}
      </oui-datagrid-column>
      <oui-datagrid-column title="'Name'">
        {{$row.firstName}} {{$row.lastName}}
      </oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email">
        <a href="mailto:{{$value}}">{{$value}}</a>
      </oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-datagrid-column title="'Birth'" property="birth">
        {{$value | date:short}}
      </oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
      },
    },
  ),
);

CustomizableCellsTemplate.story = {
  name: 'Customizable cells template',
};

export const DynamicColumns = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid rows="$ctrl.data" page-size="5" columns="[{
        title: 'First name',
        property: 'firstName',
        sortable: 'asc',
        searchable: true,
        filterable: true,
      },
      {
        title: 'Last name',
        property: 'lastName',
        sortable: true,
        searchable: true,
        filterable: true,
      },
      {
        title: 'Mother',
        property: 'parents.mother.lastName',
        template: '{{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}',
        sortable: true,
        hidden: !$ctrl.showParents,
      },
      {
        title: 'Father',
        property: 'parents.father.lastName',
        template: '{{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}',
        sortable: true,
        hidden: !$ctrl.showParents,
      }]">
      <oui-datagrid-topbar>
        <oui-checkbox model="$ctrl.showParents">Show parents</oui-checkbox>
      </oui-datagrid-topbar>
    </oui-datagrid>`,
    {
      $ctrl: {
        data,
        showParents: false,
      },
    },
  ),
);

DynamicColumns.story = {
  name: 'Dynamic columns',
};

export const RemoteData = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <oui-datagrid
      page-size="5"
      rows-loader="$ctrl.loadPartialData($config)"
      row-loader="$ctrl.loadRow($row)">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Mother'" property="parents.mother.lastName">
        {{$row.parents.mother.lastName}}, {{$row.parents.mother.firstName}}
      </oui-datagrid-column>
      <oui-datagrid-column title="'Father'" property="parents.father.lastName">
        {{$row.parents.father.lastName}}, {{$row.parents.father.firstName}}
      </oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email">
        <a href="mailto:{{$value}}">{{$value}}</a>
      </oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-datagrid-column title="'Birth'" property="birth">
        {{$value|date:short}}
      </oui-datagrid-column>
    </oui-datagrid>`,
    {
      $ctrl: new (class {
        constructor() {
          this.delay = 500;
        }

        loadPartialData({ offset, pageSize }) {
          const page = data.slice(offset - 1, offset + pageSize - 1);

          // Simulate deferred promise
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: map(page, (line) => pick(line, ['firstName', 'lastName'])),
                meta: {
                  currentOffset: offset,
                  pageCount: Math.ceil(data.length / pageSize),
                  totalCount: data.length,
                  pageSize,
                },
              });
            }, this.delay);
          });
        }

        loadRow({ firstName, lastName }) {
          // Simulate deferred promise
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(find(data, { firstName, lastName }));
            }, this.delay + 1000 * Math.random());
          });
        }
      })(),
    },
  ),
);

RemoteData.story = {
  name: 'Remote data',
};
