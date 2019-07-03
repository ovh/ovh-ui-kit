import { storiesOf } from '@storybook/html';

storiesOf('Old|Styles/Datagrid', module)
  .add(
    'Simple',
    () => `
    <table class="oui-datagrid">
      <thead class="oui-datagrid__headers">
        <tr>
          <th class="oui-datagrid__header oui-datagrid__header_sortable-desc oui-datagrid__header_sorted" tabindex="0">First Name</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable-asc oui-datagrid__header_sorted" tabindex="0">Last Name</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Mother</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr class="oui-datagrid__row">
          <td class="oui-datagrid__cell">Tammy</td>
          <td class="oui-datagrid__cell">Adams</td>
          <td class="oui-datagrid__cell">Howe, Clement</td>
          <td class="oui-datagrid__cell">Mann, Ines</td>
          <td class="oui-datagrid__cell">tadams27@1688.com</td>
          <td class="oui-datagrid__cell">55-(821)413-9216</td>
          <td class="oui-datagrid__cell">Aug 21, 1980</td>
        </tr>
        <tr class="oui-datagrid__row">
          <td class="oui-datagrid__cell">Norma</td>
          <td class="oui-datagrid__cell">Adams</td>
          <td class="oui-datagrid__cell">Prohaska, Alysa</td>
          <td class="oui-datagrid__cell">Rau, Raoul</td>
          <td class="oui-datagrid__cell">nadams2n@histats.com</td>
          <td class="oui-datagrid__cell">1-(512)242-1388</td>
          <td class="oui-datagrid__cell">Sep 27, 1974</td>
        </tr>
      </tbody>
    </table>
    `,
  )
  .add(
    'Responsive',
    () => `
    <div class="oui-datagrid-responsive-container">
      <div class="oui-datagrid-responsive-container__sticky-container">
        <div class="oui-datagrid-responsive-container__overflow-container">
          <table class="oui-datagrid">
            <thead class="oui-datagrid__headers">
              <tr>
                <th class="oui-datagrid__header oui-datagrid__header_sortable-desc oui-datagrid__header_sorted" tabindex="0">First Name</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable-asc oui-datagrid__header_sorted" tabindex="0">Last Name</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Mother</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
                <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr class="oui-datagrid__row">
                <td class="oui-datagrid__cell">Tammy</td>
                <td class="oui-datagrid__cell">Adams</td>
                <td class="oui-datagrid__cell">Howe, Clement</td>
                <td class="oui-datagrid__cell">Mann, Ines</td>
                <td class="oui-datagrid__cell">tadams27@1688.com</td>
                <td class="oui-datagrid__cell">55-(821)413-9216</td>
                <td class="oui-datagrid__cell">Aug 21, 1980</td>
              </tr>
              <tr class="oui-datagrid__row">
                <td class="oui-datagrid__cell">Norma</td>
                <td class="oui-datagrid__cell">Adams</td>
                <td class="oui-datagrid__cell">Prohaska, Alysa</td>
                <td class="oui-datagrid__cell">Rau, Raoul</td>
                <td class="oui-datagrid__cell">nadams2n@histats.com</td>
                <td class="oui-datagrid__cell">1-(512)242-1388</td>
                <td class="oui-datagrid__cell">Sep 27, 1974</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    `,
  )
  .add(
    'Compact',
    () => `
    <table class="oui-datagrid oui-datagrid_compact">
      <thead class="oui-datagrid__headers">
        <tr>
          <th class="oui-datagrid__header oui-datagrid__header_sortable-desc oui-datagrid__header_sorted" tabindex="0">First Name</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable-asc oui-datagrid__header_sorted" tabindex="0">Last Name</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Mother</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
          <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr class="oui-datagrid__row">
          <td class="oui-datagrid__cell">Tammy</td>
          <td class="oui-datagrid__cell">Adams</td>
          <td class="oui-datagrid__cell">Howe, Clement</td>
          <td class="oui-datagrid__cell">Mann, Ines</td>
          <td class="oui-datagrid__cell">tadams27@1688.com</td>
          <td class="oui-datagrid__cell">55-(821)413-9216</td>
          <td class="oui-datagrid__cell">Aug 21, 1980</td>
        </tr>
        <tr class="oui-datagrid__row">
          <td class="oui-datagrid__cell">Norma</td>
          <td class="oui-datagrid__cell">Adams</td>
          <td class="oui-datagrid__cell">Prohaska, Alysa</td>
          <td class="oui-datagrid__cell">Rau, Raoul</td>
          <td class="oui-datagrid__cell">nadams2n@histats.com</td>
          <td class="oui-datagrid__cell">1-(512)242-1388</td>
          <td class="oui-datagrid__cell">Sep 27, 1974</td>
        </tr>
      </tbody>
    </table>
    `,
  );
