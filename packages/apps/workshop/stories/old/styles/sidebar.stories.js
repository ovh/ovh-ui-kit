import { storiesOf } from '@storybook/html';

storiesOf('Old|Styles/Sidebar', module)
  .add(
    'Simple',
    () => `
    <nav class="oui-sidebar" style="width: 300px;">
      <div class="oui-sidebar-menu">
        <ul class="oui-sidebar-list">
          <li class="oui-sidebar-list__item">
            <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
              Service 1
            </a>
          </li>
          <li class="oui-sidebar-list__item">
            <a class="oui-sidebar-link" href="#">
              Service 2
            </a>
          </li>
          <li class="oui-sidebar-list__item">
            <a class="oui-sidebar-link" href="#">
              Service 3
            </a>
          </li>
          <li class="oui-sidebar-list__item">
            <a class="oui-sidebar-link" href="#">
              Service 4
            </a>
          </li>
          <li class="oui-sidebar-list__item">
            <a class="oui-sidebar-link" href="#">
              Service 5
            </a>
          </li>
        </ul>
      </div>
    </nav>
    `,
  )
  .add(
    'Multi levels',
    () => `
    <nav class="oui-sidebar" style="width: 300px;">
      <!-- Root -->
      <div class="oui-sidebar-menu">
        <ul class="oui-sidebar-list">
          <li class="oui-sidebar-list__item">
            <span class="oui-sidebar-link">
              Category 1
            </span>
            <!-- Level 1 -->
            <div class="oui-sidebar-menu">
              <ul class="oui-sidebar-list">
                <li class="oui-sidebar-list__item">
                  <span class="oui-sidebar-link">
                    Product 1
                  </span>
                  <!-- Level 2 -->
                  <div class="oui-sidebar-menu">
                    <ul class="oui-sidebar-list">
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                          Service 1
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 2
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 2
                  </a>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    `,
  )
  .add(
    'Collapsible',
    () => `
    <nav class="oui-sidebar" style="width: 300px;">
      <div class="oui-sidebar-menu">
        <ul class="oui-sidebar-list">
          <li class="oui-sidebar-list__item">
            <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="true">
              Category 1
            </button>
            <div class="oui-sidebar-menu">
              <ul class="oui-sidebar-list">
                <li class="oui-sidebar-list__item">
                  <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="true">
                    Product 1
                  </button>
                  <div class="oui-sidebar-menu">
                    <ul class="oui-sidebar-list">
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                          Service 1
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 2
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 2
                  </a>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="oui-sidebar-list__item">
            <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="false">
              Category 2
            </button>
          </li>
          <li class="oui-sidebar-list__item">
            <button type="button" class="oui-sidebar-link" aria-haspopup="true" aria-expanded="false">
              Category 3
            </button>
          </li>
        </ul>
      </div>
    </nav>
    `,
  )
  .add(
    'Responsive',
    () => `
    <nav class="oui-sidebar" style="width: 300px;">
      <!-- Root -->
      <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
        <ul class="oui-sidebar-list">
          <li class="oui-sidebar-list__item" aria-haspopup="true" aria-expanded="false">
            <button type="button" class="oui-sidebar-link">
              Category 1
            </button>
          </li>
          <li class="oui-sidebar-list__item" aria-haspopup="true" aria-expanded="false">
            <button type="button" class="oui-sidebar-link">
              Category 2
            </button>
          </li>
          <li class="oui-sidebar-list__item">
            <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="true">
              Category 3
            </button>
            <!-- Level 1 -->
            <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
              <header class="oui-sidebar-menu__header">
                <div class="oui-sidebar-menu__back">
                  <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                    <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
                  </button>
                </div>
                <span class="oui-sidebar-menu__breadcrumb">
                  Manager
                </span>
                <p class="oui-sidebar-menu__title">
                  Category 3
                </p>
              </header>
              <ul class="oui-sidebar-list">
                <li class="oui-sidebar-list__item">
                  <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="true">
                    Product 1
                  </button>
                  <!-- Level 2 -->
                  <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
                    <header class="oui-sidebar-menu__header">
                      <div class="oui-sidebar-menu__back">
                        <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                          <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
                        </button>
                      </div>
                      <p class="oui-sidebar-menu__breadcrumb">
                        Manager › Category 3
                      </p>
                      <p class="oui-sidebar-menu__title">
                        Product 1
                      </p>
                    </header>
                    <ul class="oui-sidebar-list">
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link oui-sidebar-link_active" href="#">
                          Service 1
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 2
                        </a>
                      </li>
                      <li class="oui-sidebar-list__item">
                        <a class="oui-sidebar-link" href="#">
                          Service 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 2
                  </a>
                </li>
                <li class="oui-sidebar-list__item">
                  <a class="oui-sidebar-link" href="#">
                    Product 3
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    `, {
      notes: 'With screen resolution below `1024px`, the Sidebar change its layout for something similar to the Navbar. This can be enabled by adding `.oui-sidebar-menu_fixed` on `oui-sidebar-menu` elements.',
    },
  );
