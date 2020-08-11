export default {
  title: 'Legacy/Components/Navbar/Native',

  parameters: {
  },
};

export const Simple = () => `
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href>
    <span class="oui-icon oui-icon-ovh"></span>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_active" href>Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href>Dolor sit amet</a>
    </li>
  </ul>
</nav>`;

export const WithMultiplesLists = () => `
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href>
    <span class="oui-icon oui-icon-ovh"></span>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_active" href>Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href>Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href>Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link" href>Adipiscing elit</a>
    </li>
  </ul>
</nav>`;

WithMultiplesLists.storyName = 'With multiples lists';

export const WithLinksVariant = () => `
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href>
    <span class="oui-icon oui-icon-ovh"></span>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href>Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_secondary" href>Dolor sit amet</a>
    </li>
  </ul>
  <ul class="oui-navbar-list oui-navbar-list_end">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_tertiary" href>Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_tertiary oui-navbar-link_icon" href>
        <span class="oui-icon oui-icon-info-circle" aria-hidden="true"></span>
        Adipiscing elit
      </a>
    </li>
  </ul>
</nav>`;

WithLinksVariant.storyName = 'With links variant';

export const WithMenus = () => `
<nav class="oui-navbar" role="navigation">
  <a class="oui-navbar__brand" href>
    <span class="oui-icon oui-icon-ovh"></span>
  </a>
  <ul class="oui-navbar-list">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href>Consectetur</a>
    </li>
    <li class="oui-navbar-list__item">
      <button class="oui-navbar-link oui-navbar-link_primary" type="button" aria-haspopup="true" aria-expanded="true">Adipiscing elit</button>
      <div class="oui-navbar-menu">
        <ul class="oui-navbar-list">
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href>Quisque posuere</a>
          </li>
          <li class="oui-navbar-list__item">
            <a class="oui-navbar-link" href>Semper scelerisque</a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</nav>`;

WithMenus.storyName = 'With menus';

WithMenus.parameters = {
  notes:
    'The menu `.oui-navbar-menu` is open if the attribute `aria-expanded` is `true`, of the previous `.oui-navbar-link` button or link.',
};

export const WithResponsiveToggler = () => `
<nav class="oui-navbar" role="navigation">
  <button type="button" class="oui-navbar-toggler" aria-haspopup="true" aria-expanded="false">
    <span class="oui-navbar-toggler__hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
  <div class="oui-navbar-menu oui-navbar-menu_fixed oui-navbar-menu_toggle">
    <ul class="oui-navbar-list">
      <li class="oui-navbar-list__item">
        <a class="oui-navbar-link oui-navbar-link_active" href="#">Lorem ipsum</a>
      </li>
      <li class="oui-navbar-list__item">
        <a class="oui-navbar-link" href="#">Dolor sit amet</a>
      </li>
    </ul>
  </div>
  <a class="oui-navbar__brand" href="#">
    <span class="oui-icon oui-icon-ovh"></span>
  </a>
  <ul class="oui-navbar-list oui-navbar_desktop-only">
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary oui-navbar-link_active" href="#">Lorem ipsum</a>
    </li>
    <li class="oui-navbar-list__item">
      <a class="oui-navbar-link oui-navbar-link_primary" href="#">Dolor sit amet</a>
    </li>
  </ul>
  <div class="oui-navbar-backdrop" aria-hidden="true"></div>
</nav>`;

WithResponsiveToggler.storyName = 'With responsive toggler';

WithResponsiveToggler.parameters = {
  notes:
    'The menu `.oui-navbar-menu_toggle` is open if the attribute `aria-expanded` is `true`, of the `.oui-navbar-toggler` button.',
};
