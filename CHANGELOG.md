# Changelog

## v2.0.0

### Breaking changes

- Update `oui-navbar` styles and markup
- New height for multiple components (40px):
    - `oui-button`
    - `oui-button-group`
    - `oui-input`
    - `oui-input-group`
    - `oui-select`
    - `oui-checkbox`
    - `oui-radio`
- New padding for `oui-button`
- New markup for `oui-checkbox` (icon has been moved from container to label)

#### oui-spinner
- Rename `oui-loader` to `oui-spinner`
- Inline element instead of block element

### New components
- `oui-tooltip`
- `oui-dropdown`
- `oui-action-menu`
- `oui-pagination`
- `oui-datagrid`

### New features
- Indeterminate state support for `oui-checkbox`

### Fixes
- Disable state when icon only for `oui-button`
- Support `popper.js` for `oui-tip`
- Support `oui-button_primary` and `oui-button_secondary` under `oui-input-group`
- Update `oui-button` styles (colors and animations)
- Update `oui-checkbox` styles (colors and animations)
- Update `oui-input-group` styles (colors and animations)
- Add font-smoothing that works only on Mac

### Doc
- DCO part removal from contributing.md
- Update years inside license and readme

## v1.0.0-alpha.20

### Fixes

- Loader improvements (fix alignment, add modifier...)

### Doc

- Add guidelines

## v1.0.0-alpha.19

### Fixes
- Adjusts button spaces
- Fix progress component label

## v1.0.0-alpha.18

### New features
- Support of `ui-icon-error_circle`, `oui-icon-help_circle`, `oui-icon-success_circle`, `oui-icon-info_circle` and `oui-icon-warning_circle` icons inside modal
- Add thresholds on progress component
- Add a default size on field component (full width)

### Fixes
- Force width auto to other inline components
- Update checkboxes size to be like radios
- Better label alignment on progress component
- `oui-input-group_numeric` width now the same on all browsers