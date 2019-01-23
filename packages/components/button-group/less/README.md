# oui-button-group

<component-status cx-design="complete" ux="prototype"></component-status>

## Installation

```less
  @import 'oui-button-group/button-group';
```

## Usage
Guidelines : 
* A button is selected by default.
* The labels are short: 1 or 2 words.
* On mobile, the button-group is on a line must remain on one line.

```html:preview
<div>
  <div class="oui-button-group">
    <button class="oui-button oui-button_secondary oui-button_small-width">1</button>
    <button class="oui-button oui-button_secondary oui-button_small-width">2</button>
    <button class="oui-button oui-button_secondary oui-button_small-width">3</button>
    <button class="oui-button oui-button_secondary oui-button_small-width">4</button>
    <button class="oui-button oui-button_secondary oui-button_small-width">5</button>
  </div>
</div>

<div>
  <div class="oui-button-group">
    <button class="oui-button oui-button_primary">Button 1</button>
    <button class="oui-button oui-button_secondary">Button 2</button>
  </div>
</div>

<div>
  <div class="oui-button-group">
    <button class="oui-button oui-button_secondary">Button 1</button>
    <button class="oui-button oui-button_primary">Button 2</button>
  </div>
</div>
```
