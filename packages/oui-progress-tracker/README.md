# oui-progress-tracker

<component-status cx-design="complete" ux="rc"></component-status>

> As per guidelines, a maximum of 7 steps is recommended, while using the progress tracker.

## Installation

```less
@import 'oui-progress-tracker/progress-tracker';
```

## Usage

```html:preview
<div class="oui-progress-tracker">
  <ul class="oui-progress-tracker__step_container">
    <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
      <a class="oui-progress-tracker__status" href="#"></a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
      <a class="oui-progress-tracker__status" href="#"></a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_active">
      <a class="oui-progress-tracker__status" href="#"></a>
    </li>
    <li class="oui-progress-tracker__step">
      <span class="oui-progress-tracker__status"></span>
    </li>
    <li class="oui-progress-tracker__step">
      <span class="oui-progress-tracker__status"></span>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_disabled">
      <span class="oui-progress-tracker__status"></span>
    </li>
  </ul>
  <ul class="oui-progress-tracker__label_container">
    <li class="oui-progress-tracker__label oui-progress-tracker__label_complete">
      <a href="#">Choix du produit</a>
    </li>
    <li class="oui-progress-tracker__label oui-progress-tracker__label_complete">
      <a href="#">Configuration du produit</a>
    </li>
    <li class="oui-progress-tracker__label oui-progress-tracker__label_active">
      <a href="#">Ajout de produits complémentaires</a>
    </li>
    <li class="oui-progress-tracker__label">Options du produit</li>
    <li class="oui-progress-tracker__label">Connexion</li>
    <li class="oui-progress-tracker__label oui-progress-tracker__label_disabled">Paiement</li>
  </ul>
</div>
```
