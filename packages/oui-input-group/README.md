# oui-input-group

<component-status cx-design="partial" ux="prototype"></component-status>

> **Important:** This component is broken on IE9, IE10 and IE11

oui-input-group is a package which provide styles to group inputs together.

## Installation

```less
  @import 'oui-input-group/input-group;
```

## Usage

```html:preview
<div class="oui-input-group">
  <input class="oui-input" placeholder="Email">
  <button class="oui-button">Find</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="Email" disabled>
  <button class="oui-button" disabled>Find</button>
</div>

<div class="oui-input-group">
  <button class="oui-button">-</button>
  <input class="oui-input" placeholder="vCores">
  <button class="oui-button">+</button>
</div>

<div class="oui-input-group">
  <input class="oui-input" placeholder="nickhandle">
  <button class="oui-button">Weird action here</button>
  <input class="oui-input" value="ovh.com" disabled>
</div>
```

## Mixins

```less
  @import 'oui-input-group/_mixins';
```

### .input-group-base

Define the base styles for an input-group.

```less
#oui > .input-group-base();
```

```less
#oui > .input-group-base(
  @button-background-color: Color,
  @button-padding: Number
);
```
