import Checkbox from '@ovh-ux/ui-kit.checkbox';

import { forModule } from 'storybook-addon-angularjs';
import { compileTemplate } from '../../../../src/utils';

export default {
  title: 'Design System/Components/Table/Native',

  parameters: {
  },
};

// Create mock module for the stories
const moduleName = 'table-native.stories';
angular.module(moduleName, [
  // For examples
  Checkbox,
]);

export const Simple = () => `
<table class="oui-table">
  <thead>
    <tr>
      <th class="oui-table__header">Header</th>
      <th class="oui-table__header">Header</th>
      <th class="oui-table__header">Header</th>
      <th class="oui-table__header">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
    </tr>
  </tfoot>
</table>`;

export const Selectable = forModule(moduleName).createElement(
  () => compileTemplate(
    `
    <table class="oui-table">
      <thead class="oui-table__headers">
        <tr>
          <th class="oui-table__header oui-table__header_s"></th>
          <th class="oui-table__header">Header</th>
          <th class="oui-table__header">Header</th>
          <th class="oui-table__header">Header</th>
          <th class="oui-table__header">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr class="oui-table__row">
          <td class="oui-table__cell oui-table__cell_s">
            <oui-checkbox inline></oui-checkbox>
          </td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
        </tr>
        <tr class="oui-table__row">
          <td class="oui-table__cell oui-table__cell_s">
            <oui-checkbox inline></oui-checkbox>
          </td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
        </tr>
        <tr class="oui-table__row">
          <td class="oui-table__cell oui-table__cell_s">
            <oui-checkbox inline></oui-checkbox>
          </td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
        </tr>
        <tr class="oui-table__row">
          <td class="oui-table__cell oui-table__cell_s">
            <oui-checkbox inline></oui-checkbox>
          </td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
        </tr>
        <tr class="oui-table__row">
          <td class="oui-table__cell oui-table__cell_s">
            <oui-checkbox inline></oui-checkbox>
          </td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
          <td class="oui-table__cell">Column</td>
        </tr>
      </tbody>
      <tfoot class="oui-table__footers">
        <tr>
          <td class="oui-table__footer oui-table__footer_s"></td>
          <td class="oui-table__footer">Footer</td>
          <td class="oui-table__footer">Footer</td>
          <td class="oui-table__footer">Footer</td>
          <td class="oui-table__footer">Footer</td>
        </tr>
      </tfoot>
    </table>`,
  ),
);

export const Sortable = () => `
<table class="oui-table">
  <thead class="oui-table__headers">
    <tr>
      <th class="oui-table__header">Header</th>
      <th class="oui-table__header oui-table__header_sortable" tabindex="0">
        Header
        <span class="oui-icon oui-icon-sort-inactive" aria-hidden="true"></span>
      </th>
      <th class="oui-table__header oui-table__header_sortable oui-table__header_sorted" tabindex="0">
        Header
        <span class="oui-icon oui-icon-sort-down" aria-hidden="true"></span>
      </th>
      <th class="oui-table__header">Header</th>
    </tr>
  </thead>
  <tbody>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
    <tr class="oui-table__row">
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
      <td class="oui-table__cell">Column</td>
    </tr>
  </tbody>
  <tfoot class="oui-table__footers">
    <tr>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
      <td class="oui-table__footer">Footer</td>
    </tr>
  </tfoot>
</table>`;

export const Responsive = () => `
<div class="oui-table-responsive">
  <table class="oui-table">
    <thead class="oui-table__headers">
      <tr>
        <th class="oui-table__header">Header</th>
        <th class="oui-table__header">Header</th>
        <th class="oui-table__header">Header</th>
        <th class="oui-table__header">Header</th>
      </tr>
    </thead>
    <tbody>
      <tr class="oui-table__row">
        <td class="oui-table__cell">Lorem ipsum dolor sit amet</td>
        <td class="oui-table__cell">Lorem ipsum dolor sit amet</td>
        <td class="oui-table__cell">Lorem ipsum dolor sit amet</td>
        <td class="oui-table__cell">Lorem ipsum dolor sit amet</td>
      </tr>
      <tr class="oui-table__row">
        <td class="oui-table__cell">Consectetur adipiscing elit</td>
        <td class="oui-table__cell">Consectetur adipiscing elit</td>
        <td class="oui-table__cell">Consectetur adipiscing elit</td>
        <td class="oui-table__cell">Consectetur adipiscing elit</td>
      </tr>
      <tr class="oui-table__row">
        <td class="oui-table__cell">Vivamus condimentum porttitor dolor</td>
        <td class="oui-table__cell">Vivamus condimentum porttitor dolor</td>
        <td class="oui-table__cell">Vivamus condimentum porttitor dolor</td>
        <td class="oui-table__cell">Vivamus condimentum porttitor dolor</td>
      </tr>
      <tr class="oui-table__row">
        <td class="oui-table__cell">Integer ac consectetur metus</td>
        <td class="oui-table__cell">Integer ac consectetur metus</td>
        <td class="oui-table__cell">Integer ac consectetur metus</td>
        <td class="oui-table__cell">Integer ac consectetur metus</td>
      </tr>
      <tr class="oui-table__row">
        <td class="oui-table__cell">In purus augue</td>
        <td class="oui-table__cell">In purus augue</td>
        <td class="oui-table__cell">In purus augue</td>
        <td class="oui-table__cell">In purus augue</td>
      </tr>
    </tbody>
    <tfoot class="oui-table__footers">
      <tr>
        <td class="oui-table__footer">Footer</td>
        <td class="oui-table__footer">Footer</td>
        <td class="oui-table__footer">Footer</td>
        <td class="oui-table__footer">Footer</td>
      </tr>
    </tfoot>
  </table>
</div>`;
