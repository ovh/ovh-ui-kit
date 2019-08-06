# Breaking Changes

## Project

* Package name has been renamed to `@ovh-ux/ui-kit`.
* Files from `ovh-ui-angular` has been moved and merged in this repository. No need to use `ovh-ui-angular` anymore.
* Files from `ovh-ui-kit-documentation` has been moved and merged in this repository. No need to use `ovh-ui-kit-documentation` anymore.
* Drop of bower support.
* LESS mixins are not exposed anymore.

## Components

* __oui-formfield__: Deprecated component. Use `oui-field` instead.
* __oui-popover__: Deprecated component. Use `oui-popover` directive instead.
* __oui-tip__: Deprecated component. Use `oui-popover` instead.

### Tagnames changes

* __extra-top__: Renamed to `oui-datagrid-topbar`.
* __oui-column__: Renamed to `oui-datagrid-column`.
* __oui-criteria-container__: Renamed to `oui-criteria`.
* __oui-page-header__: Renamed to `oui-header`.

### Attributes changes

#### Attribute `align` renamed to `placement`

* __oui-action-menu__
* __oui-criteria-adder__
* __oui-dropdown__
* __oui-guide-menu__
* __oui-navbar-dropdown-menu__
* __oui-navbar-menu__
* __oui-navbar-notification__

#### Attribute `placement` is set to `start` by default

* __oui-action-menu__
* __oui-guide-menu__

#### Attribute `text` replaced by transclude value

* __oui-action-menu-item__
* __oui-button__
* __oui-checkbox__
* __oui-dropdown-item__
* __oui-guide-menu-item__
* __oui-navbar-link__
* __oui-progress-bar__
* __oui-radio__
* __oui-slideshow-panel__
* __oui-tile-button__

#### Others changes

* __oui-back-button__: Attributes `heading` and `title` replaced by transclude value.
* __oui-message__: Attribute `dismissable` is set to `false` by default for all types.
* __oui-message__: Attribute `on-dismissed` renamed to `on-dismiss`.
* __oui-modal__: Attribute `title` renamed to `heading`.
* __oui-select__: Unused `align` attribute removed.
* __oui-select-picker__: Attribute `text` renamed to `label`.
* __oui-select-picker__: Remove deprecated `span` tag as transclude slot. Use `oui-select-picker-section` tag instead.

## Modules

* __oui.criteria-adder__: Module has been removed. Use `oui.criteria` instead.
* __oui.criteria-container__: Module has been renamed to `oui.criteria`.
* __oui-header-tabs__: Module has been removed. Use `oui.header` instead.
* __oui.page-header__: Module has been renamed to `oui.header`.

## Styles

### Classnames has been renamed

* __oui-header__: Renamed to `.oui-heading`.
* __oui-page-header__: Renamed to `.oui-header`.
* __oui-datagrid-topbar__: Renamed to `.oui-criteria`.

### Component margin has been removed

* oui-action-menu
* oui-button
* oui-button-group
* oui-calendar
* oui-clipboad
* oui-checkbox
* oui-dropdown
* oui-file
* oui-guide-menu
* oui-input
* oui-input-group
* oui-numeric
* oui-radio
* oui-search
* oui-select
* oui-textarea
* oui-timepicker

### Component margin has been added

* oui-criteria
* oui-dual-list
* oui-header
* oui-slideshow
* oui-tabs

### Deprecated style has been removed

* __oui-color-badge__: Used only for the documentation.
* __oui-formfield__: Use `oui-field` instead.
* __oui-icon-badge__: Used only for the documentation.
* __oui-input-group_clipboard__: Use `.oui-clipboard` instead. This classname extend `.oui-input-group`.
* __oui-list_steps__: Not used anymore
* __oui-input-group_numeric__: Use `.oui-numeric` instead. This classname extend `.oui-input-group`.
* __oui-input-group_search__: Use `.oui-search` instead. This classname extend `.oui-input-group`.
