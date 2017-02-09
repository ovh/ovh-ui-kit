# oui-checkbox

oui-checkbox is a package which provide styles for the checkbox component.

## Installation

```less
  @import 'oui-checkbox/checkbox';
```

## Usage

### Label

```html:preview
<label class="oui-checkbox">
  <input class="oui-checkbox__input" name="oui-checkbox-1" type="checkbox" checked="checked">
  <span class="oui-checkbox__label">Checked</span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>

<label class="oui-checkbox">
  <input class="oui-checkbox__input" name="oui-checkbox-2" type="checkbox">
  <span class="oui-checkbox__label">Unchecked</span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>

<label class="oui-checkbox">
  <input class="oui-checkbox__input" name="oui-checkbox-3" type="checkbox" disabled="disabled" checked="checked">
  <span class="oui-checkbox__label">Disabled [Checked]</span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>

<label class="oui-checkbox">
  <input class="oui-checkbox__input" name="oui-checkbox-4" disabled="disabled" type="checkbox">
  <span class="oui-checkbox__label">Disabled [Unchecked]</span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>

<label class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" name="oui-checkbox-7" type="checkbox" checked="checked">
  <span class="oui-checkbox__label">Big [Checked]</span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>
```

### Description

```html:preview
<label class="oui-checkbox">
  <input class="oui-checkbox__input" name="oui-checkbox-6" type="checkbox" checked="checked">
  <span class="oui-checkbox__label">Checked</span>
  <span class="oui-checkbox__description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>

<label class="oui-checkbox oui-checkbox_big">
  <input class="oui-checkbox__input" name="oui-checkbox-7" type="checkbox" checked="checked">
  <span class="oui-checkbox__label">Big [Checked]</span>
  <span class="oui-checkbox__description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est ipsum, condimentum ornare condimentum quis, ultrices sit amet augue. Phasellus mollis dui quis nunc ultrices tempus. Praesent dignissim, felis in ornare euismod, augue elit mattis nibh, a tincidunt nunc enim et nulla. Nam ac blandit mauris. Donec semper tellus et felis viverra, in molestie lacus sodales. Proin fringilla vestibulum tempus. In feugiat risus mauris, tempus lacinia dolor posuere vel.
  </span>
  <svg class="oui-checkbox__facade" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path class="oui-checkbox__false-bottom" d="M2,16H15V3H2Z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_unchecked" d="M16 17H1V2h15zM2 16h13V3H2z"></path>
    <path class="oui-checkbox__outline oui-checkbox__outline_checked" d="M15,9.09V16H2V3h9.55l.81-1H1V17H16V7.85Z"></path>
    <path class="oui-checkbox__checkmark" d="M8.53,9.58l2.14-2.65,4.84-6A.81.81,0,0,1,16.83.78l1,.82A.78.78,0,0,1,18,2.82L9.6,13.2a1.1,1.1,0,0,1-1.52.38,1.74,1.74,0,0,1-.49-.39q-2-2.36-4-4.74a.77.77,0,0,1,.1-1.16l1.07-.91A.79.79,0,0,1,6,6.48L8.4,9.36A1.57,1.57,0,0,1,8.53,9.58Z"></path>
  </svg>
</label>
```

## Mixins

```less
  @import 'oui-checkbox/checkbox/_mixins';
```

### .checkbox

Define the base styles for a checkbox.

```less
#oui > .checkbox();
```

```less
#oui > .checkbox(
  @outline-color,
  @outline-color_hover,
  @outline-color_checked,
  @outline-color_checked-hover,
  @spacing
);
```

| Parameter                        | Type   | Default Value                                                             |
| -------------------------------- | ------ | ------------------------------------------------------------------------- |
| __@outline-color__               | Color  | `@oui-checkbox-outline-color: @oui-color-dusty`                           |
| __@outline-color_hover__         | Color  | `@oui-checkbox-outline-color_hover: @oui-checkbox-outline-color_checked`  |
| __@outline-color_checked__       | Color  | `@oui-checkbox-outline-color_checked: @oui-color-zodiac`                  |
| __@outline-color_checked-hover__ | Color  | `@oui-checkbox-outline-color_checked-hover: @oui-color-dusty`             |
| __@spacing__                     | Number | `@oui-checkbox-spacing: 0 rem-calc(5) 0 0`                                |

### .checkbox-size

Change the size of a checkbox

```less
#oui > .checkbox-size(
  @size,
  @selector
)
```

| Parameter             | Type   | Comments                                                       |
| --------------------- | ------ | -------------------------------------------------------------- |
| __@size__             | Number |                                                                |
| __@selector__         | Class  | [Optional] Class name that will be prefixed on each subclasses |

### .checkbox-label

Change the label properties of a checkbox

```less
#oui > .checkbox-label(
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

The block class is `oui-checkbox` (top-level element).

### Element

Inner elements:

| Element                   | Class                                                   |
| ------------------------- | ------------------------------------------------------- |
| __input[type=checkbox]__  | `oui-checkbox__input`                                   |
| __span__                  | `oui-checkbox__label`                                   |
| __svg__                   | `oui-checkbox__facade`                                  |
| path                      | `oui-checkbox__false-bottom`                            |
| path                      | `oui-checkbox__outline oui-checkbox__outline_unchecked` |
| path                      | `oui-checkbox__outline oui-checkbox__outline_checked`   |
| path                      | `oui-checkbox__checkmark`                               |

### Modifier

The provided modifiers are:

| Class                 | Description                                    |
| --------------------- | ---------------------------------------------- |
| `oui-checkbox_big`    | Make the checkbox looks bigger                 |
