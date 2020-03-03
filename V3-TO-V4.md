# Breaking Changes

With this major update, we apply the new guidelines of our [Design System](https://design.cxprojects.ovh/). The application of those guidelines will be done in multiple batch of changes. The v4.0.x consists of the first batch of changes.

## Stable changes

Moving from v3.x to v4.x should be easier than the previous major update.
But there are still notable changes, that we encourage to apply on your projects for easing the next updates.

We aim with this version to be as less breaking as possible with the functioning of the v3.x components.

## Project

### Package files

* Files `oui-b10.*`, `oui-ods.*` and `oui-ods-dark.*` have been removed. Use `oui.*` files instead.
* Variables for `css`, `less` and `scss` will only expose the design tokens of the design system.

## Content

### Colors

* Classnames `oui-color-*` has been renamed to reflect the tokens of the Design System. Refer to the `Helpers/Colors` documentation for the new classnames.

### Icons

* Icons default `font-size` has been changed from `1.5em` to `1em`.

There is now only 2 sets of icons: `concept` and `system`.

* Icons set `oui-icon-*_thin`, `oui-icon-*_extra-thin` has been removed. Use corresponding `oui-icon-*` icons instead.
* Icons set `oui-icon-*_line` has been removed. Use corresponding `oui-icon-*` or `oui-icon-*_concept` icons instead.
* Modifier classname `oui-icon-*_bicolor` is not used anymore and has been removed.

These changes impact the `concept` icons:

* Icon `.oui-icon-minus_concept` has been removed. Use `.oui-icon-minus` icon instead.
* Icon `.oui-icon-chrono-on-off-quickstart_concept` has been renamed to `.oui-icon-chrono_concept`.
* Icon `.oui-icon-cloudhand_concept` has been renamed to `.oui-icon-cloud-hand_concept`.
* Icon `.oui-icon-gear_2_concept` has been renamed to `.oui-icon-server-gear_concept`.
* Icon `.oui-icon-gpu_concept` has been renamed to `.oui-icon-hardware-gpu_concept`.
* Icon `.oui-icon-hands_concept` has been renamed to `.oui-icon-handshake_concept`.
* Icon `.oui-icon-loc-ovh_concept` has been renamed to `.oui-icon-geolocalisation-ovhcloud_concept`.
* Icon `.oui-icon-on_concept` has been renamed to `.oui-icon-speaker-on_concept`.
* Icon `.oui-icon-none_concept` has been renamed to `.oui-icon-speaker-off_concept`.
* Icon `.oui-icon-pay-as-you-go_concept` has been renamed to `.oui-icon-calendar-pay-as-you-go_concept`.
* Icon `.oui-icon-phone-mobile_concept` has been renamed to `.oui-icon-device-mobile_concept`.
* Icon `.oui-icon-phone-tablet_concept` has been renamed to `.oui-icon-device-tablet_concept`.
* Icon `.oui-icon-plan_concept` has been renamed to `.oui-icon-geolocalisation-plan_concept`.
* Icon `.oui-icon-replication-application_concept` has been renamed to `.oui-icon-app-replication_concept`.
* Icon `.oui-icon-sata_concept` has been renamed to `.oui-icon-hardware-sata_concept`.
* Icon `.oui-icon-ssd_concept` has been renamed to `.oui-icon-hardware-ssd_concept`.
* Icon `.oui-icon-symmetrical-lines_concept` has been renamed to `.oui-icon-lines-symmetrical_concept`.
* Icon `.oui-icon-transit-padlock_concept` has been renamed to `.oui-icon-padlock-transit_concept`.

These changes impact the `system` icons:

* Icons `.oui-icon-copy-error`, `.oui-icon-copy-normal`, and `.oui-icon-copy-success` have been removed. Use `.oui-icon-copy` icon instead.
* Icon `.oui-icon-error_circle` has been renamed to `.oui-icon-error-circle`.
* Icon `.oui-icon-external_link` has been renamed to `.oui-icon-external-link`.
* Icon `.oui-icon-eye` has been renamed to `.oui-icon-eye-open`.
* Icon `.oui-icon-eye-blocked` has been renamed to `.oui-icon-eye-closed`.
* Icon `.oui-icon-help_circle` has been renamed to `.oui-icon-help-circle`.
* Icon `.oui-icon-info_circle` has been renamed to `.oui-icon-info-circle`.
* Icon `.oui-icon-success_circle` has been renamed to `.oui-icon-success-circle`.
* Icon `.oui-icon-triangle-up-down` has been renamed to `.oui-icon-sort`.
* Icon `.oui-icon-warning_circle` has been renamed to `.oui-icon-warning-circle`.

Previous classnames are still supported with this version.

## Components

The first batch of modifications impacts those components:

* Badge (formerly Status)
* Box
* Button
* Checkbox
* Chips
* Collapsible
* Datagrid / Table
* Field
* Input
* Radio
* Select
* Tabs
* Textarea

Even if this version try to be as much breaking-free as possible, there are some notable changes.

### Badge (formerly Status)

Component `status` has been renamed `badge`. Use `oui-badge-*` classnames instead of `oui-status-*`. But classnames `oui-status-*` are still supported with this version.

### Button

* Modifier classname `.oui-button_link` has been renamed to `oui-button_ghost`.
* Modifier classname `.oui-button_full-width` has been renamed to `oui-button_block`.
* Modifier classname `.oui-button_large-height` has been renamed to `oui-button_l`.
* Modifier classname `.oui-button_small-width` has been renamed to `oui-button_s`.

### Checkbox

* Component attributes `size` and `variant` are not used anymore and have been removed.
* Modifier classname `.oui-checkbox_m` has been removed.
* Modifier classname `.oui-checkbox_thumbnail-light` has been removed. Use `oui-checkbox_thumbnail` instead.

### Datagrid / Table

For native `<table>`, prefer using `.oui-table-*` instead of `.oui-datagrid-*` classnames.
But classnames `oui-datagrid-*` are still supported with this version.

#### Classnames

* Block classname `.oui-datagrid-responsive-container` has been renamed to `.oui-datagrid-responsive`.
* Element classname `.oui-datagrid__cell-short` has been changed to a Modifier classname `.oui-datagrid__cell_s`.
* Element classname `.oui-datagrid__cell-sticky` is not used anymore and has been removed.
* Element classnames `.oui-datagrid__header_sortable-asc` and `.oui-datagrid__header_sortable-desc` will not add the corresponding icons in the header. Refer to the `Components/Table` documentation
* The sticky columns have been removed to be reworked in a better way for the responsive mode.

### Input

* Modifier `oui-input-group_button` has been changed to a Block `oui-input-overlay`.

### Radio

* Component attributes `size` and `variant` are not used anymore and have been removed.
* Modifier classname `.oui-radio_m` has been removed.
* Modifier classname `.oui-radio_thumbnail-light` has been removed. Use `.oui-radio_thumbnail` instead.

### Select Picker

* Component attribute `variant` is not used anymore and has been removed.
* Modifier `oui-select-picker_light` has been removed.
