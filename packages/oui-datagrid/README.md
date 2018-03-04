# oui-datagrid

<component-status cx-design="complete" ux="rc"></component-status>

## Installation

```less
  @import 'oui-datagrid/datagrid';
```

## Examples

### Basic

```html:preview
<table class="oui-datagrid">
  <thead class="oui-datagrid__headers">
    <tr>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
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
```

### Checkboxes and action-menus

```html:preview
<table class="oui-datagrid">
  <thead class="oui-datagrid__headers">
    <tr>
      <th class="oui-datagrid__header">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-global" name="oui-checkbox1-global" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-global">
            <span class="oui-checkbox__label">
              <span class="oui-checkbox__icon">
                <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
              </span>
            </span>
          </label>
        </div>
      </th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
      <th class="oui-datagrid__header"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-1" name="oui-checkbox1-1" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-1">
            <span class="oui-checkbox__label">
              <span class="oui-checkbox__icon">
                <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
              </span>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell">Tammy</td>
      <td class="oui-datagrid__cell">Adams</td>
      <td class="oui-datagrid__cell">Howe, Clement</td>
      <td class="oui-datagrid__cell">Mann, Ines</td>
      <td class="oui-datagrid__cell">tadams27@1688.com</td>
      <td class="oui-datagrid__cell">55-(821)413-9216</td>
      <td class="oui-datagrid__cell">Aug 21, 1980</td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-2" name="oui-checkbox1-2" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-2">
            <span class="oui-checkbox__label">
              <span class="oui-checkbox__icon">
                <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
              </span>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell">Norma</td>
      <td class="oui-datagrid__cell">Adams</td>
      <td class="oui-datagrid__cell">Prohaska, Alysa</td>
      <td class="oui-datagrid__cell">Rau, Raoul</td>
      <td class="oui-datagrid__cell">nadams2n@histats.com</td>
      <td class="oui-datagrid__cell">1-(512)242-1388</td>
      <td class="oui-datagrid__cell">Sep 27, 1974</td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
  </tbody>
</table>
```

### Responsive

#### Basic

```html:preview
<div class="oui-datagrid-responsive-container">
  <div class="oui-datagrid-responsive-container__sticky-container">
    <div class="oui-datagrid-responsive-container__overflow-container">
      <table class="oui-datagrid">
        <thead class="oui-datagrid__headers">
          <tr>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
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
```

#### Checkboxes and action-menus

```html:preview
<div class="oui-datagrid-responsive-container oui-datagrid-responsive-container_sticky-checkbox oui-datagrid-responsive-container_sticky-actions">
  <div class="oui-datagrid-responsive-container__sticky-container oui-datagrid-responsive-container__sticky-container_scroll-begin
  oui-datagrid-responsive-container__sticky-container_scroll-end">
    <div class="oui-datagrid-responsive-container__overflow-container">
      <table class="oui-datagrid">
        <thead class="oui-datagrid__headers">
          <tr>
            <th class="oui-datagrid__header oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox2-global" name="oui-checkbox2-global" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox2-global">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
            <th class="oui-datagrid__header oui-datagrid__cell-sticky"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="oui-datagrid__row">
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox2-1" name="oui-checkbox2-1" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox2-1">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </td>
            <td class="oui-datagrid__cell">Tammy</td>
            <td class="oui-datagrid__cell">Adams</td>
            <td class="oui-datagrid__cell">Howe, Clement</td>
            <td class="oui-datagrid__cell">Mann, Ines</td>
            <td class="oui-datagrid__cell">tadams27@1688.com</td>
            <td class="oui-datagrid__cell">55-(821)413-9216</td>
            <td class="oui-datagrid__cell">Aug 21, 1980</td>
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <oui-action-menu aria-label="Server: actions" align="end" compact>
                <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
                <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
              </oui-action-menu>
            </td>
          </tr>
          <tr class="oui-datagrid__row">
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox2-2" name="oui-checkbox2-2" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox2-2">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </td>
            <td class="oui-datagrid__cell">Norma</td>
            <td class="oui-datagrid__cell">Adams</td>
            <td class="oui-datagrid__cell">Prohaska, Alysa</td>
            <td class="oui-datagrid__cell">Rau, Raoul</td>
            <td class="oui-datagrid__cell">nadams2n@histats.com</td>
            <td class="oui-datagrid__cell">1-(512)242-1388</td>
            <td class="oui-datagrid__cell">Sep 27, 1974</td>
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <oui-action-menu aria-label="Server: actions" align="end" compact>
                <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
                <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
              </oui-action-menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

#### Only checkboxes

```html:preview
<div class="oui-datagrid-responsive-container oui-datagrid-responsive-container_sticky-checkbox">
  <div class="oui-datagrid-responsive-container__sticky-container oui-datagrid-responsive-container__sticky-container_scroll-end">
    <div class="oui-datagrid-responsive-container__overflow-container">
      <table class="oui-datagrid">
        <thead class="oui-datagrid__headers">
          <tr>
            <th class="oui-datagrid__header oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox3-global" name="oui-checkbox3-global" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox3-global">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr class="oui-datagrid__row">
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox3-1" name="oui-checkbox3-1" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox3-1">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </td>
            <td class="oui-datagrid__cell">Tammy</td>
            <td class="oui-datagrid__cell">Adams</td>
            <td class="oui-datagrid__cell">Howe, Clement</td>
            <td class="oui-datagrid__cell">Mann, Ines</td>
            <td class="oui-datagrid__cell">tadams27@1688.com</td>
            <td class="oui-datagrid__cell">55-(821)413-9216</td>
            <td class="oui-datagrid__cell">Aug 21, 1980</td>
          </tr>
          <tr class="oui-datagrid__row">
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <div class="oui-checkbox">
                <input class="oui-checkbox__input" id="oui-checkbox3-2" name="oui-checkbox3-2" type="checkbox" checked="checked">
                <label class="oui-checkbox__label-container" for="oui-checkbox3-2">
                  <span class="oui-checkbox__label">
                    <span class="oui-checkbox__icon">
                      <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
                      <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
                    </span>
                  </span>
                </label>
              </div>
            </td>
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
```

#### Only action-menus

```html:preview
<div class="oui-datagrid-responsive-container oui-datagrid-responsive-container_sticky-actions">
  <div class="oui-datagrid-responsive-container__sticky-container oui-datagrid-responsive-container__sticky-container_scroll-begin">
    <div class="oui-datagrid-responsive-container__overflow-container">
      <table class="oui-datagrid">
        <thead class="oui-datagrid__headers">
          <tr>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">First Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Last Name</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Mother</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Father</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Email</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Phone</th>
            <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Birth</th>
            <th class="oui-datagrid__header oui-datagrid__cell-sticky"></th>
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
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <oui-action-menu aria-label="Server: actions" align="end" compact>
                <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
                <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
              </oui-action-menu>
            </td>
          </tr>
          <tr class="oui-datagrid__row">
            <td class="oui-datagrid__cell">Norma</td>
            <td class="oui-datagrid__cell">Adams</td>
            <td class="oui-datagrid__cell">Prohaska, Alysa</td>
            <td class="oui-datagrid__cell">Rau, Raoul</td>
            <td class="oui-datagrid__cell">nadams2n@histats.com</td>
            <td class="oui-datagrid__cell">1-(512)242-1388</td>
            <td class="oui-datagrid__cell">Sep 27, 1974</td>
            <td class="oui-datagrid__cell oui-datagrid__cell-sticky">
              <oui-action-menu aria-label="Server: actions" align="end" compact>
                <oui-action-menu-item text="Details" aria-label="Ticket: details"></oui-action-menu-item>
                <oui-action-menu-item text="Close" aria-label="Ticket: close"></oui-action-menu-item>
              </oui-action-menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
