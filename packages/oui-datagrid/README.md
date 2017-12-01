# oui-datagrid

<component-status cx-design="partial" ux="prototype"></component-status>

oui-datagrid is a package which provides styles for the datagrid component.

## Installation

```less
  @import 'oui-datagrid/datagrid';
```



```html:preview
<table class="oui-datagrid">
  <thead class="oui-datagrid__headers">
    <tr>
      <th class="oui-datagrid__header">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-global" name="oui-checkbox1-global" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-global">
            <span class="oui-checkbox__icon">
              <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
            </span>
          </label>
        </div>
      </th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Ticket</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-asc" tabindex="0">Service</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable-desc" tabindex="0">Category</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Subject</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Last person to interact</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Creation Date</th>
      <th class="oui-datagrid__header oui-datagrid__header_sortable" tabindex="0">Date Updated</th>
      <th class="oui-datagrid__header">Status</th>
      <th class="oui-datagrid__header">Rating</th>
      <th class="oui-datagrid__header"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-1" name="oui-checkbox1-1" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-1">
            <span class="oui-checkbox__icon">
              <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell"><a href="#">4717771748</a></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell"><span class="skeleton-loading"></span></td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details" on-click="$ctrl.showCurrentValueInPopup('Details')"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close" on-click="$ctrl.showCurrentValueInPopup('Close')"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-2" name="oui-checkbox1-2" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-2">
            <span class="oui-checkbox__icon">
              <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell"><a href="#">4717771748</a></td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details" on-click="$ctrl.showCurrentValueInPopup('Details')"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close" on-click="$ctrl.showCurrentValueInPopup('Close')"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-3" name="oui-checkbox1-3" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-3">
            <span class="oui-checkbox__icon">
              <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell"><a href="#">4717771748</a></td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details" on-click="$ctrl.showCurrentValueInPopup('Details')"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close" on-click="$ctrl.showCurrentValueInPopup('Close')"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
    <tr class="oui-datagrid__row">
      <td class="oui-datagrid__cell">
        <div class="oui-checkbox">
          <input class="oui-checkbox__input" id="oui-checkbox1-4" name="oui-checkbox1-4" type="checkbox" checked="checked">
          <label class="oui-checkbox__label-container" for="oui-checkbox1-4">
            <span class="oui-checkbox__icon">
              <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
              <i class="oui-icon oui-icon-checkbox-indeterminate" aria-hidden="true"></i>
            </span>
          </label>
        </div>
      </td>
      <td class="oui-datagrid__cell"><a href="#">4717771748</a></td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        test
      </td>
      <td class="oui-datagrid__cell">
        <oui-action-menu aria-label="Server: actions" align="end" compact>
          <oui-action-menu-item text="Details" aria-label="Ticket: details" on-click="$ctrl.showCurrentValueInPopup('Details')"></oui-action-menu-item>
          <oui-action-menu-item text="Close" aria-label="Ticket: close" on-click="$ctrl.showCurrentValueInPopup('Close')"></oui-action-menu-item>
        </oui-action-menu>
      </td>
    </tr>
  </tbody>
</table>
```

## ** --------------------- /!\ LEGACY - DO NOT SCROLL /!\ --------------------- **

```html:preview
<table class="oui-datagrid">
  <thead class="oui-datagrid__headers">
    <tr>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable" tabindex="0">Filename</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-asc oui-datagrid__cell_sorted" tabindex="0">Id</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-asc" tabindex="0">Size</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-desc" tabindex="0">Creation</th>
      <th class="oui-datagrid__header" tabindex="0">Actions</th>
    </tr>
  </thead>
  <tbody class="oui-datagrid__body">
    <tr class="oui-datagrid__row" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc</td>
      <td data-title="Id" class="oui-datagrid__cell">1</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc</td>
      <td data-title="Id" class="oui-datagrid__cell">2</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc</td>
      <td data-title="Id" class="oui-datagrid__cell">3</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
  </tbody>
</table>
```

### Responsive

```html:preview
<table class="oui-datagrid oui-datagrid_responsive">
  <thead class="oui-datagrid__headers">
    <tr>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable" tabindex="0">Filename</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-asc oui-datagrid__cell_sorted" tabindex="0">Id</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-asc" tabindex="0">Size</th>
      <th class="oui-datagrid__header oui-datagrid__cell_sortable-desc" tabindex="0">Creation</th>
      <th class="oui-datagrid__header" tabindex="0">Actions</th>
    </tr>
  </thead>
  <tbody class="oui-datagrid__body">
    <tr class="oui-datagrid__row" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc
        <i role="button" class="oui-icon oui-icon-chevron-right oui-datagrid__expand-button"></i>
      </td>
      <td data-title="Id" class="oui-datagrid__cell">1</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row oui-datagrid__row_closed" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc
        <i role="button" class="oui-icon oui-icon-chevron-right oui-datagrid__expand-button"></i>
      </td>
      <td data-title="Id" class="oui-datagrid__cell">2</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row oui-datagrid__row_closed" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc
        <i role="button" class="oui-icon oui-icon-chevron-right oui-datagrid__expand-button"></i>
      </td>
      <td data-title="Id" class="oui-datagrid__cell">3</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row oui-datagrid__row_closed" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc
        <i role="button" class="oui-icon oui-icon-chevron-right oui-datagrid__expand-button"></i>
      </td>
      <td data-title="Id" class="oui-datagrid__cell">4</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row oui-datagrid__row_closed" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc
        <i role="button" class="oui-icon oui-icon-chevron-right oui-datagrid__expand-button"></i>
      </td>
      <td data-title="Id" class="oui-datagrid__cell">5</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
    <tr class="oui-datagrid__row oui-datagrid__row_closed" tabindex="0">
      <td data-title="Filename" class="oui-datagrid__cell">abc</td>
      <td data-title="Id" class="oui-datagrid__cell">6</td>
      <td data-title="Size" class="oui-datagrid__cell">123 KB</td>
      <td data-title="Creation" class="oui-datagrid__cell">Sun Mar 19 19:53:24 2017</td>
      <td class="oui-datagrid__cell oui-datagrid__cell_action">
        <button type="button" class="oui-button oui-button_secondary">More...</button>
      </td>
    </tr>
  </tbody>
</table>
```

### Basic HTML table

```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
│ oui-table [table]             │───────────────────────────────────────────────────────────────┐
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘                                                               │
│┌oui-table__headers [thead]───────────────────────────────────────────────────────────────────┐│
││┌oui-table__row [tr]────────────────────────────────────────────────────────────────────────┐││
│││┌oui-table__header [th]──────┐┌oui-table__header [th]───────┐┌oui-table__header [th]──────┐│││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
│││└────────────────────────────┘└─────────────────────────────┘└────────────────────────────┘│││
││└───────────────────────────────────────────────────────────────────────────────────────────┘││
│└─────────────────────────────────────────────────────────────────────────────────────────────┘│
│┌oui-table__body [tbody]──────────────────────────────────────────────────────────────────────┐│
││┌oui-table__row [tr]────────────────────────────────────────────────────────────────────────┐││
│││┌oui-table__cell [td]────────┐┌oui-table__cell [td]─────────┐┌oui-table__cell [td]────────┐│││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
│││└────────────────────────────┘└─────────────────────────────┘└────────────────────────────┘│││
││└───────────────────────────────────────────────────────────────────────────────────────────┘││
││┌oui-table__row [tr]────────────────────────────────────────────────────────────────────────┐││
│││┌oui-table__cell [td]────────┐┌oui-table__cell [td]─────────┐┌oui-table__cell [td]────────┐│││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
││││                            ││                             ││                            ││││
│││└────────────────────────────┘└─────────────────────────────┘└────────────────────────────┘│││
││└───────────────────────────────────────────────────────────────────────────────────────────┘││
│└─────────────────────────────────────────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Advanced CSS for oui-angular component

A fake header is added with flexbox based positionning.
This markup is automatically created with the AngularJS oui-table component.

```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐
│ oui-table-container           │───────────────────────────────────────────────────────────────┐
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘                                                               │
│┌oui-table-container__headers─────────────────────────────────────────────────────────────────┐│
││┌oui-table-container__header──┐┌oui-table-container__header──┐┌oui-table-container__header──┐││
│││                             ││                             ││                             │││
│││                             ││                             ││                             │││
│││                             ││                             ││                             │││
││└─────────────────────────────┘└─────────────────────────────┘└─────────────────────────────┘││
│└─────────────────────────────────────────────────────────────────────────────────────────────┘│
│┌oui-table-container__body────────────────────────────────────────────────────────────────────┐│
││┌oui-table [table]──────────────────────────────────────────────────────────────────────────┐││
│││                                                                                           │││
│││                                [use the oui-table markup]                                 │││
│││                                                                                           │││
││└───────────────────────────────────────────────────────────────────────────────────────────┘││
│└─────────────────────────────────────────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Modifier

### .oui-table_responsive

By default, the table is not responsive. But if want it to be responsive, add `oui-table_responsive` class.

## Mixins

```less
  @import 'oui-table/_mixins';
```

### .table-base

Define the base styles for a table.

```less
#oui > .table-base();
```

```less
#oui > .table-base(
  @oui-table-width: Number,
  @oui-table-margin: Number
);
```

### .table-header

Define the base styles for the table headers.

```less
#oui > .table-header();
```

```less
#oui > .table-header(
  @oui-table-header-background-color: Color,
  @oui-table-header-font-color: Color
);
```

### .table-cell

Define the base styles for the table cells.

```less
#oui > .table-cell();
```

```less
#oui > .table-cell(
  @oui-table-cell-background-color: Color,
  @oui-table-cell-border-color: Color,
  @oui-table-cell-font-color: Color,
  @oui-table-cell-padding: Number
);
```

### .table-cell-sortable

Define the base styles for the sortable table cells.

```less
#oui > .table-cell-sortable();
```

```less
#oui > .table-cell-sortable(
  @oui-table-arrow-size: Number
);
```

### .table-arrow-asc

Define the base styles for the arrow asc.

```less
#oui > .table-arrow-asc();
```

```less
#oui > .table-arrow-asc(
  @oui-table-arrow-color: Color,
  @oui-table-arrow-size: Number
);
```
### .table-arrow-desc

Define the base styles for the arrow desc.

```less
#oui > .table-arrow-desc();
```

```less
#oui > .table-arrow-desc(
  @oui-table-arrow-color: Color,
  @oui-table-arrow-size: Number
);
```

### .table-container

Define the base styles for the wrapper that contains oui-table with a fixed header.

```less
#oui > .table-container();
```

### .table-responsive

Define additional styles to oui-table to make it responsive.

```less
#oui > .table-responsive();
```
