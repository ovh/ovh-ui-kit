# oui-radio

<component-status cx-design="partial" ux="rc"></component-status>

oui-radio is a package which provide styles for the input radio component.

## Installation

```less
  @import 'oui-radio/radio';
```

## Usage

### Label

```html:preview
  <label class="oui-radio" for="oui-radio-1">
    <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1" id="oui-radio-1" checked="checked" />
    <span class="oui-radio__label">Checked</span>
  </label>

  <label class="oui-radio" for="oui-radio-2">
    <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2" id="oui-radio-2" />
    <span class="oui-radio__label">Unchecked</span>
  </label>

  <label class="oui-radio" for="oui-radio-3">
    <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3" id="oui-radio-3" disabled="disabled" checked="checked" />
    <span class="oui-radio__label">Disabled [Checked]</span>
  </label>

  <label class="oui-radio" for="oui-radio-4">
    <input class="oui-radio__input" type="radio" name="oui-radio-4" value="oui-radio-4" id="oui-radio-4" disabled="disabled" />
    <span class="oui-radio__label">Disabled [Unchecked]</span>
  </label>

  <label class="oui-radio oui-radio_big" for="oui-radio-5">
    <input class="oui-radio__input" type="radio" name="oui-radio-5" value="oui-radio-5" id="oui-radio-5" checked="checked" />
    <span class="oui-radio__label">Big [Checked]</span>
  </label>
```

### Description

```html:preview
  <label class="oui-radio" for="oui-radio-6">
    <input class="oui-radio__input" type="radio" name="oui-radio-6" value="oui-radio-6" id="oui-radio-6" checked="checked" />
    <span class="oui-radio__label">Checked</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
  </label>

  <label class="oui-radio oui-radio_big" for="oui-radio-7">
    <input class="oui-radio__input" type="radio" name="oui-radio-7" value="oui-radio-7" id="oui-radio-7" checked="checked" />
    <span class="oui-radio__label">Big [Checked]</span>
    <span class="oui-radio__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
    </span>
  </label>
```

## Mixins

```less
  @import 'oui-radio/radio/_mixins';
```

### .radio

Define the base styles for a radio.

```less
#oui > .radio();
```

```less
#oui > .radio(
  @label-font-size,
  @label-font-color,
  @label-font-color_disabled,
  @label-font-color_input-checked,
  @outer-circle-border-color,
  @outer-circle-border-color_disabled,
  @outer-circle-border-color_input-checked,
  @outer-circle-background-color,
  @outer-circle-background-color_disabled,
  @outer-circle-border-color_hover,
  @outer-circle-border-color_input-checked-hover,
  @outer-circle-border-color_active,
  @inner-circle-background-color,
  @inner-circle-background-color_active,
  @inner-circle-background-color_input-checked-disabled,
  @spacing,
  @outer-circle-size,
  @outer-circle-top,
  @outer-circle-left,
  @inner-circle-size,
  @inner-circle-top,
  @inner-circle-left,
  @padding-left
);
```

| Parameter                                                    | Type   | Default Value                                                                                           |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------- |
| __@label-font-size__                                         | Number | `@oui-radio-label-font-size: rem-calc(16)`                                                              |
| __@label-font-color__                                        | Color  | `@oui-radio-label-font-color: #687688`                                                                  |
| __@label-font-color_disabled__                               | Color  | `@oui-radio-label-font-color_disabled: #b3b3b3`                                                         |
| __@label-font-color_input-checked__                          | Color  | `@oui-radio-label-font-color_input-checked: @oui-color-zodiac`                                          |
| __@outer-circle-border-color__                               | Color  | `@oui-radio-outer-circle-border-color: @oui-color-dusty`                                                |
| __@outer-circle-border-color_disabled__                      | Color  | `@oui-radio-outer-circle-border-color_disabled: #e8e8e8`                                                |
| __@outer-circle-border-color_input-checked__                 | Color  | `@oui-radio-outer-circle-border-color_input-checked: @oui-radio-label-font-color_input-checked`         |
| __@outer-circle-background-color__                           | Color  | `@oui-radio-outer-circle-background-color: transparent`                                                 |
| __@outer-circle-background-color_disabled__                  | Color  | `@oui-radio-outer-circle-background-color_disabled: #f2f2f2`                                            |
| __@outer-circle-border-color_hover__                         | Color  | `@oui-radio-outer-circle-border-color_hover: @oui-color-zodiac`                                         |
| __@outer-circle-border-color_input-checked-hover__           | Color  | `@oui-radio-outer-circle-border-color_input-checked-hover: @oui-color-dusty`                            |
| __@outer-circle-border-color_active__                        | Color  | `@oui-radio-outer-circle-border-color_active: @oui-color-pacific`                                       |
| __@inner-circle-background-color__                           | Color  | `@oui-radio-inner-circle-background-color: @oui-radio-label-font-color_input-checked`                   |
| __@inner-circle-background-color_active__                    | Color  | `@oui-radio-inner-circle-background-color_active: @oui-radio-outer-circle-border-color_active`          |
| __@inner-circle-background-color_input-checked-disabled__    | Color  | `@oui-radio-inner-circle-background-color_input-checked-disabled: @oui-radio-label-font-color_disabled` |
| __@spacing__                                                 | Number | `rem-calc(10) 0`                                                                                        |
| __@outer-circle-size__                                       | Number | `rem-calc(16)`                                                                                          |
| __@outer-circle-top__                                        | Number | `rem-calc(2)`                                                                                           |
| __@outer-circle-left__                                       | Number | `0`                                                                                                     |
| __@inner-circle-size__                                       | Number | `rem-calc(6)`                                                                                           |
| __@inner-circle-top__                                        | Number | `rem-calc(8)`                                                                                           |
| __@inner-circle-left__                                       | Number | `rem-calc(6)`                                                                                           |
| __@padding-left__                                            | Number | `rem-calc(25)`                                                                                          |

### .radio-position

Change the position of a radio

```less
#oui > .radio-position(
  @outer-circle-top,
  @outer-circle-left,
  @inner-circle-top,
  @inner-circle-left,
  @selector
)
```

| Parameter              | Type   | Comments                                                       |
| ---------------------- | ------ | -------------------------------------------------------------- |
| __@outer-circle-top__  | Number |                                                                |
| __@outer-circle-left__ | Number |                                                                |
| __@inner-circle-top__  | Number |                                                                |
| __@inner-circle-left__ | Number |                                                                |
| __@selector__          | Class  | [Optional] Class name that will be prefixed on each subclasses |

### .radio-size

Change the size of a radio

```less
#oui > .radio-size(
  @outer-circle-size,
  @inner-circle-size,
  @selector
)
```

| Parameter               | Type   | Comments                                                       |
| ----------------------- | ------ | -------------------------------------------------------------- |
| __@outer-circle-size__  | Number |                                                                |
| __@inner-circle-size__  | Number |                                                                |
| __@selector__           | Class  | [Optional] Class name that will be prefixed on each subclasses |

### .radio-label

Change the label properties of a radio

```less
#oui > .radio-label(
  @font-size,
  @line-height
  @selector
)
```

| Parameter             | Type   | Comments                                                       |
| --------------------- | ------ | -------------------------------------------------------------- |
| __@font-size__        | Number |                                                                |
| __@line-height__      | Number |                                                                |
| __@selector__         | Class  | [Optional] Class name that will be prefixed on each subclasses |

## Classes

### Block

The block class is `oui-radio` (top-level element).

### Element

Inner elements:

| Element               | Class                 |
| --------------------- | --------------------- |
| __input[type=radio]__ | `oui-checkbox__input` |
| __span__              | `oui-radio__label`    |


### Modifier

The provided modifiers are:

| Class              | Description                                 |
| ------------------ | ------------------------------------------- |
| `oui-radio_big`    | Make the radio looks bigger                 |
