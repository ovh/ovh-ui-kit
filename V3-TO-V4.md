# Breaking Changes

## Project

* Files `oui-b10.*`, `oui-ods.*` and `oui-ods-dark.*` have been removed. Use `oui.*` instead.
* LESS variables are not exposed anymore. Only the design tokens are available.
* SCSS tokens has been removed

## Content

### Icons

* Icons default `font-size` has been changed from `1.5em` to `1em`.
* Icons set `oui-icon-*_thin`, `oui-icon-*_extra-thin` has been removed. Use `oui-icon-*` set instead.
* Icons set `oui-icon-*_line` has been removed. Use `oui-icon-*_concept` set instead.
* Modifier `oui-icon-*_bicolor` has been removed.

## Components

### Badge/Status

* Component `status` has been renamed `badge`. But the component name `status` is still supported with this version.

### Button

* Modifier `oui-button_link` has been renamed to `oui-button_ghost`.
* Modifier `oui-button_full-width` has been renamed to `oui-button_block`.
* Modifier `oui-button_large-height` has been renamed to `oui-button_l`.
* Modifier `oui-button_small-width` has been renamed to `oui-button_s`.

### Checkbox

* Attribute `size` is not used anymore and has been removed.
* Attribute `variant` is not used anymore and has been removed.
* Modifier `oui-checkbox_m` has been removed.
* Modifier `oui-checkbox_thumbnail-light` has been removed. Use `oui-checkbox_thumbnail` instead.

### Input

* Modifier `oui-input-group_button` has been changed to a Block `oui-input-overlay`.

### Radio

* Attribute `size` is not used anymore and has been removed.
* Attribute `variant` is not used anymore and has been removed.
* Modifier `oui-radio_m` has been removed.
* Modifier `oui-radio_thumbnail-light` has been removed. Use `oui-radio_thumbnail` instead.

### Select Picker

* Attribute `variant` is not used anymore and has been removed.
* Modifier `oui-select-picker_light` has been removed.
