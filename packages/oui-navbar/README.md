# oui-navbar

<component-status cx-design="none" ux="prototype"></component-status>

oui-navbar is a package which provide styles for the navbar component.

## Installation

```less
  @import 'oui-navbar/navbar';
```

## Usage

```html:preview
<nav class="oui-navbar" role="navigation">
  <button class="oui-navbar__toggler" type="button"
    aria-haspopup="true" aria-expanded="false">
    <span class="oui-navbar__toggler-icon">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
  <div class="oui-navbar__menu oui-navbar__menu_toggle">
    <ul class="oui-navbar__list">
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link" href="">MyOVH</a>
      </li>
      <li class="oui-navbar__list-item">
        <button class="oui-navbar__link" type="button"
          aria-haspopup="true" aria-expanded="false">
          Web
        </button>
        <div class="oui-navbar__menu oui-navbar__menu_right">
          <header class="oui-navbar__menu-header">
            <oui-back-button class="oui-navbar__menu-back" on-click="$ctrl.onNavbarMenuToggle('main.web', true)"></oui-back-button>
            <h3 class="oui-navbar__menu-title">Web</h3>
          </header>
          <ul class="oui-navbar__list">
            <li class="oui-navbar__list-item">
              <button class="oui-navbar__link" type="button"
                aria-haspopup="true" aria-expanded="false">
                Domains
              </button>
              <div class="oui-navbar__menu oui-navbar__menu_right">
                <header class="oui-navbar__menu-header">
                  <oui-back-button class="oui-navbar__menu-back"></oui-back-button>
                  <span class="oui-navbar__menu-breadcrumb">Web</span>
                  <h3 class="oui-navbar__menu-title">Domains</h3>
                </header>
                <ul class="oui-navbar__list">
                  <li class="oui-navbar__list-item">
                    <a href="#" class="oui-navbar__link">Youpi</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link" href="">Dedicated</a>
      </li>
      <li class="oui-navbar__list-item">
        <button class="oui-navbar__link" type="button"
          aria-haspopup="true" aria-expanded="false">
          Cloud
        </button>
        <div class="oui-navbar__menu oui-navbar__menu_right">
          <header class="oui-navbar__menu-header">
            <oui-back-button class="oui-navbar__menu-back"></oui-back-button>
            <h3 class="oui-navbar__menu-title">Cloud</h3>
          </header>
          <ul class="oui-navbar__list">
            <li class="oui-navbar__list-item">
              <a href="#" class="oui-navbar__link">Lorem ipsum</a>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link" href="">Telecom</a>
      </li>
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link" href="">Sunrise</a>
      </li>
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link oui-navbar__link_secondary" href="">Partners</a>
      </li>
      <li class="oui-navbar__list-item">
        <a class="oui-navbar__link oui-navbar__link_secondary" href="">UXLabs</a>
      </li>
    </ul>
  </div>
  <a class="oui-navbar__brand" href="">
    <i class="oui-icon oui-icon-ovh"></i>
  </a>
  <ul class="oui-navbar__list oui-navbar__list_grow oui-navbar__desktop-only">
    <li class="oui-navbar__list-item active">
      <a class="oui-navbar__link" href="">MyOVH</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Web</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Dedicated</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Cloud</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Telecom</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link" href="">Sunrise</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link oui-navbar__link_secondary" href="">Partners</a>
    </li>
    <li class="oui-navbar__list-item">
      <a class="oui-navbar__link oui-navbar__link_secondary" href="">UXLabs</a>
    </li>
  </ul>
  <ul class="oui-navbar__list oui-navbar__list_end">
    <li class="oui-navbar__list-item">
      <button class="oui-navbar__link oui-navbar__link_icon" type="button"
        aria-haspopup="true" aria-expanded="false">
        <i class="oui-icon oui-icon-help_circle" aria-hidden="true"></i>
        Assistance
      </button>
      <div class="oui-navbar__menu oui-navbar__menu_right">
        <header class="oui-navbar__menu-header">
          <h3 class="oui-navbar__menu-title">Assistance</h3>
        </header>
        <ul class="oui-navbar__list">
          <li class="oui-navbar__list-item">
            <a href="#" class="oui-navbar__link">Guides d'utilisation</a>
          </li>
          <li class="oui-navbar__list-item">
            <a href="#" class="oui-navbar__link">Créer un ticket support</a>
          </li>
          <li class="oui-navbar__list-item">
            <a href="#" class="oui-navbar__link">Liste de mes demandes d'assistance</a>
          </li>
          <li class="oui-navbar__list-item">
            <a href="#" class="oui-navbar__link">Assistance téléphonique</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="oui-navbar__list-item">
      <button class="oui-navbar__link oui-navbar__link_icon" type="button"
        aria-haspopup="true" aria-expanded="false">
        <i class="oui-icon oui-icon-info_circle" aria-hidden="true"></i>
        Notifications
      </button>
      <div class="oui-navbar__menu oui-navbar__menu_right">
        <header class="oui-navbar__menu-header">
          <h3 class="oui-navbar__menu-title">Notifications</h3>
        </header>
        <div class="oui-navbar__menu-item">
          <strong>OVH Status BETA</strong><br />
          Vous testez actuellement OvhMyStatus : les incidents, mises à jour et maintenances liés à vos services OVH.<br />
          <a href="#">feedbackstatus@corp.ovh.com</a></span>
        </div>
        <a href="#" class="oui-navbar__menu-item">
          <strong>Public Cloud</strong><br />
          28 aout 2017 14:28:34<br />
          Incident résolu
        </a>
        <div class="oui-navbar__menu-item">
          <a href="#" class="oui-button oui-button_full-width oui-button_secondary">
            Voir toutes les notifications
          </a>
        </div>
      </div>
    </li>
    <li class="oui-navbar__list-item oui-navbar__desktop-only">
      <button class="oui-navbar__link oui-navbar__link_icon" type="button"
        aria-haspopup="true" aria-expanded="false">
        <i class="oui-icon oui-icon-success_circle" aria-hidden="true"></i>
        John
      </button>
      <div class="oui-navbar__menu oui-navbar__menu_right">
        <div class="oui-navbar__menu-item">
          <h3 class="oui-navbar__menu-title">John Smith</h3>
          <small>ls148374-ovh</small>
        </div>
        <ul class="oui-navbar__list">
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link" href="">Mon compte</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link" href="">Facturation</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link" href="">Mes services</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link oui-navbar__link_secondary" href="">Donner mon avis</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link oui-navbar__link_secondary" href="">Déconnexion</a>
          </li>
        </ul>
      </div>
    </li>
    <li class="oui-navbar__list-item oui-navbar__mobile-only">
      <button class="oui-navbar__link oui-navbar__link_icon" type="button"
        aria-haspopup="true" aria-expanded="false">
        <i class="oui-icon oui-icon-success_circle"></i>
        John
      </button>
      <div class="oui-navbar__menu oui-navbar__menu_right">
        <div class="oui-navbar__menu-item">
          <h3 class="oui-navbar__menu-title">John Smith</h3>
          <small>ls148374-ovh</small>
        </div>
        <ul class="oui-navbar__list">
          <li class="oui-navbar__list-item">
            <button class="oui-navbar__link" type="button"
              aria-haspopup="true" aria-expanded="false">
              Mon compte
            </button>
            <div class="oui-navbar__menu oui-navbar__menu_right">
              <header class="oui-navbar__menu-header">
                <oui-back-button class="oui-navbar__menu-back"></oui-back-button>
                <h3 class="oui-navbar__menu-title">Mon compte</h3>
              </header>
              <ul class="oui-navbar__list">
                <li class="oui-navbar__list-item">
                  <a href="" class="oui-navbar__link">Lorem ipsum</a>
                </li>
                <li class="oui-navbar__list-item">
                  <a href="" class="oui-navbar__link">Dolor sit amet</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link" href="">Facturation</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link" href="">Mes services</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link oui-navbar__link_secondary" href="">Donner mon avis</a>
          </li>
          <li class="oui-navbar__list-item">
            <a class="oui-navbar__link oui-navbar__link_secondary" href="">Déconnexion</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
  <div class="oui-navbar__backdrop" aria-hidden="true">
  </div>
</nav>
```

## Mixins

```less
  @import 'oui-navbar/_mixins';
```

### .navbar

Define the base styles for a navbar.

```less
#oui > .navbar();
```

```less
#oui > .navbar(
  @background-color: @oui-navbar-background-color;
  @font-color: @oui-navbar-font-color;
  @icon-color: @oui-navbar-icon-color;
);
```

| Parameter             | Type    | Default Value                                       |
| --------------------- | ------- | --------------------------------------------------- |
| __@background-color__ | Color   | `@oui-navbar-background-color: @oui-color-zodiac;`  |
| __@font-color__       | Color   | `@oui-navbar-font-color: #fff;`                     |
| __@icon-color__       | Color   | `@oui-navbar-icon-color: @oui-color-fiord;`         |

## Classes

### Block

The block class is `oui-navbar` (top-level element).

### Element

Inner elements:

| Element                   | Class                                            |
| ------------------------- | ------------------------------------------------ |
| __a__                     | `oui-navbar__title-link`                         |
|   h1                      | `oui-navbar__title`                              |
|     i                     | `oui-icon oui-icon-logo`                         |
|     span                  | `oui-navbar__title-bold`                         |
|     span                  | `oui-navbar__title-small`                        |
| __ul__                    | `oui-navbar__items`                              |
|   li                      | `oui-navbar__item`                               |
|     a                     | `oui-navbar__link`                               |
| __div__                   | `oui-navbar__selector`                           |
|   select                  | `oui-navbar__select`                             |
