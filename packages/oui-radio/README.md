# oui-radio

oui-radio is a package which provide styles for the input radio component.

## Installation

```less
  @import 'oui-radio/radio';
```

## Usage

<div>
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
    <span class="oui-radio__label">Disabled [Checked}</span>
  </label>

  <label class="oui-radio" for="oui-radio-4">
    <input class="oui-radio__input" type="radio" name="oui-radio-4" value="oui-radio-4" id="oui-radio-4" disabled="disabled" />
    <span class="oui-radio__label">Disabled [Unchecked]</span>
  </label>
</div>

```html
  <label class="oui-radio" for="oui-radio-1">
    <input class="oui-radio__input" type="radio" name="oui-radio-1" value="oui-radio-1" id="oui-radio-1" checked="checked" />
    <span class="oui-radio__label">Checked</span>
  </label>
  <label class="oui-radio" for="oui-radio-2">
    <input class="oui-radio__input" type="radio" name="oui-radio-2" value="oui-radio-2" id="oui-radio-2" />
    <span class="oui-radio__label">Unchecked</span>
  </label>
  <label class="oui-radio" for="oui-radio-3">
    <input class="oui-radio__input" type="radio" name="oui-radio-3" value="oui-radio-3" id="oui-radio-3" />
    <span class="oui-radio__label">Disabled [Checked}</span>
  </label>
  <label class="oui-radio" for="oui-radio-4">
    <input class="oui-radio__input" type="radio" name="oui-radio-4" value="oui-radio-4" id="oui-radio-4" />
    <span class="oui-radio__label">Disabled [Unchecked]</span>
  </label>
```

## Mixins

```less
  @import 'oui-radio/radio/_mixins';
```

