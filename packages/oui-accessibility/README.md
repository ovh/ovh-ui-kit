# oui-accessibility

<component-status cx-design="none" ux="prototype"></component-status>

oui-accessibility is a package which provides tools as mixins for managing a11y.

## Usage

```less
  @import 'oui-accessibility/_mixins';
```

## Mixins

| Name | Defaults | Description |
| --- | --- | --- |
| `#oui > .visually-hidden()` |  | will hide visually an element (but not for the screen reader). |


## Modifiers

`#oui > .visually-hidden()` will also declare a `_focusable` modifier on your element.
