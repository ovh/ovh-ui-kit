# oui-progress-tracker

<component-status cx-design="partial" ux="rc"></component-status>

> **Important:** This component is broken on IE9 (flex)

> As CX requirements this progress tracker is on one line and can't take too much item and too long labels

oui-progress-tracker is a package which provide styles for the progress-tracker component.

## Installation

```less
@import 'oui-progress-tracker/progress-tracker';
```

## Usage

```html:preview
<ul class="oui-progress-tracker">
  <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
    <a href="#" class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Choix du produit</span>
    </a>
  </li>
  <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
    <a href="#" class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Configuration du produit</span>
    </a>
  </li>
  <li class="oui-progress-tracker__step oui-progress-tracker__step_active">
    <a href="#" class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Ajout de produits complémentaires</span>
    </a>
  </li>
  <li class="oui-progress-tracker__step">
    <span class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Options du produit</span>
    </span>
  </li>
  <li class="oui-progress-tracker__step">
    <span class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Connexion</span>
    </span>
  </li>
  <li class="oui-progress-tracker__step">
    <span class="oui-progress-tracker__status">
      <span class="oui-progress-tracker__label">Paiement</span>
    </span>
  </li>
</ul>
```

## Mixins

```less
@import 'oui-progress-tracker/_mixins';
```

### .progress-tracker

Define the base styles for a progress-tracker.

```less
#oui > .progress-tracker();
```

```less
#oui > .progress-tracker(
  @selector: Class,
  @font-color: Color,
  @font-color-active: Color,
  @font-color-complete: Color,
  @font-size: Number,
  @item-max-width: Number,
  @item-padding: Number,
  @container-background-color: Color,
  @container-height: Number,
  @container-margin: Number
);
```

## Classes

### Block

The block class is `oui-progress-tracker` (top-level element).
