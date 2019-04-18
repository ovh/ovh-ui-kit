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
angular.module(moduleName, ['oui.datagrid']);

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
      <oui-datagrid-column title="'First name'" property="firstName"></oui-datagrid-column>
      <oui-datagrid-column title="'Last name'" property="lastName"></oui-datagrid-column>
      <oui-datagrid-column title="'Email'" property="email"></oui-datagrid-column>
      <oui-datagrid-column title="'Phone'" property="phone"></oui-datagrid-column>
    </oui-datagrid>
    `, {
      $ctrl: {
        data,
        onRowSelect: action('onRowSelect'),
      },
    })),
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
    })),
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
      notes: 'You can use `$row` to get values of the current row, `$rowIndex` to get index of the current row, and `$value` to get value of the cell',
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
