# oui-back-button

<component-status cx-design="complete" ux="rc"></component-status>

oui-back-button is a package which provide styles for the back-button component.

## Installation

```less
@import 'oui-back-button/back-button';
```

## Usage


```html:preview
<div class="oui-back-button">
    <button type="button"
            class="oui-button oui-button_icon-alone">
      <i class="oui-icon oui-icon-chevron-left" aria-hidden="true"></i>
    </button>
    <h2 class="oui-back-button_title oui-header_2">Title</h2>
</div>
```


## Mixins

```less
@import 'oui-back-button/_mixins';
```

### .back-button-base

Define the base styles for a back-button.

```less
#oui > .back-button-base();
```

```less
#oui > .button-base(
  @margin-bottom: Number
);
```

## Classes

### Block

The block class is `oui-back-button` (top-level element).
