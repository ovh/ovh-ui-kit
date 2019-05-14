import find from 'lodash/find';
import map from 'lodash/map';
import pick from 'lodash/pick';

import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { forModule } from 'storybook-addon-angularjs';

import { compileTemplate } from '../../src/utils';

import data from '../_data/datagrid/index.data.json';

// Create mock module for the stories
const moduleName = 'oui-datagrid-stories';
angular.module(moduleName, [
  'oui.datagrid',

  // For examples
  'oui.action-menu',
]);

storiesOf('Components/Datagrid', module)
  .add(
    'Simple',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })),
  )
  .add(
    'Pagination',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      on-page-change="$ctrl.onPageChange($pagination)">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        onPageChange: action('onPageChange'),
      },
    })),
  )
  .add(
    'Empty placeholer',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      empty-placeholder="{{ $ctrl.placeholder }}"
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data: [],
        placeholder: 'There’s no bananas here, sorry :(',
      },
    })),
  )
  .add(
    'With topbar',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })),
  )
  .add(
    'Sortable',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName" sortable="asc"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" sortable></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })),
  )
  .add(
    'Search and filtering',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data">
      <oui-datagrid-column title="'First name'" property="firstName" searchable filterable></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" searchable filterable></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })),
  )
  .add(
    'Selectable rows',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        onRowSelect: action('onRowSelect'),
      },
    })), {
      notes: 'This will create a sticky column at the start of your datagrid.',
    },
  )
  .add(
    'Expandable rows',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      rows="$ctrl.data"
      page-size="5"
      expandable-rows>
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
      <oui-datagrid-expanded-row>
        test {{$row}} xx
      </oui-datagrid-expanded-row>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })), {
      notes: 'This will expand datagrid rows when clicked.',
    },
  )
  .add(
    'Row actions',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        onActionClick: action('onActionClick'),
      },
    })), {
      notes: 'This will create a sticky column at the end of your datagrid.<br />Rows action menu will be automatically set to `compact` with a placement to `end`.',
    },
  )
  .add(
    'Customizable columns display',
    forModule(moduleName).createElement(() => compileTemplate(`
    <oui-datagrid
      page-size="5"
      rows="$ctrl.data"
      customizable>
      <oui-datagrid-column title="'First name'" property="firstName" prevent-customization></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName" prevent-customization></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        onColumnsParametersChange: action('onColumnsParametersChange'),
      },
    })), {
      notes: 'This will create a sticky column at the end of your datagrid.',
    },
  )
  .add(
    'Customizable cells template',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
      },
    })), {
      notes: 'You can use `$row` to get values of the current row, `$rowIndex` to get index of the current row, `$value` to get value of the cell',
    },
  )
  .add(
    'Dynamic columns',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        showParents: false,
      },
    })), {
      notes: 'Columns can be dynamically rendered using the `columns` attribute of datagrid. Using this attribute, a new column property `hidden` is available.',
    },
  )
  .add(
    'Remote data',
    forModule(moduleName).createElement(() => compileTemplate(`
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
    </oui-datagrid>
    `, {
      $ctrl: new class {
        constructor() {
          this.delay = 500;
        }

        loadPartialData({ offset, pageSize }) {
          const page = data.slice(offset - 1, offset + pageSize - 1);

          // Simulate deferred promise
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                data: map(page, line => pick(line, ['firstName', 'lastName'])),
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
      }(),
    })),
  );
