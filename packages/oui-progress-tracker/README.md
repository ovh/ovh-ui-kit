# oui-progress-tracker

<component-status cx-design="partial" ux="rc"></component-status>

> As CX requirements this progress tracker is on one line and can't take too much item and too long labels

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
