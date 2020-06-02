export default {
  title: 'Legacy/Components/Progress Tracker/Native',

  parameters: {
  },
};

export const HorizontalDefault = () => `
<div class="oui-progress-tracker">
  <ol class="oui-progress-tracker__steps">
    <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
      <a class="oui-progress-tracker__status" href="#">
        <span class="oui-progress-tracker__label">Choix du produit</span>
      </a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_error">
      <a class="oui-progress-tracker__status" href="#">
        <span class="oui-progress-tracker__label">Configuration du produit</span>
      </a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_active">
      <a class="oui-progress-tracker__status" href="#">
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
    <li class="oui-progress-tracker__step oui-progress-tracker__step_disabled">
      <span class="oui-progress-tracker__status">
        <span class="oui-progress-tracker__label">Paiement</span>
      </span>
    </li>
  </ol>
</div>`;

HorizontalDefault.story = {
  name: 'Horizontal (Default)',
};

export const Vertical = () => `
<div class="oui-progress-tracker oui-progress-tracker_vertical">
  <ol class="oui-progress-tracker__steps">
    <li class="oui-progress-tracker__step oui-progress-tracker__step_complete">
      <a class="oui-progress-tracker__status" href="#">
        <span class="oui-progress-tracker__label">Choix du produit</span>
      </a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_error">
      <a class="oui-progress-tracker__status" href="#">
        <span class="oui-progress-tracker__label">Configuration du produit</span>
      </a>
    </li>
    <li class="oui-progress-tracker__step oui-progress-tracker__step_active">
      <a class="oui-progress-tracker__status" href="#">
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
    <li class="oui-progress-tracker__step oui-progress-tracker__step_disabled">
      <span class="oui-progress-tracker__status">
        <span class="oui-progress-tracker__label">Paiement</span>
      </span>
    </li>
  </ol>
</div>`;
