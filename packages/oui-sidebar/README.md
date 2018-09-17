# oui-sidebar

<component-status cx-design="complete" ux="rc"></component-status>

oui-sidebar is a package which provides styles for the sidebar component.

## Installation

```less
  @import 'oui-sidebar/sidebar';
```

## Usage

### Basic

```html:preview
<div class="oui-doc-preview-only-keep-children" style="height:500px;display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;"><nav class="oui-sidebar">
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          Category 2
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
                    <a class="oui-sidebar-link" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="oui-sidebar-list__item">
        <span class="oui-sidebar-link">
          Category 3
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
                    <a class="oui-sidebar-link" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
```

### Collapsible

**Note**: `aria-haspopup` and `aria-expanded` attributes of `.oui-sidebar-link` are used to make collapsible `.oui-sidebar-menu`.

```html:preview
<div class="oui-doc-preview-only-keep-children" style="height:500px;padding:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;background-color:rgba(0,0,0,0.05);overflow-x:auto;"><nav class="oui-sidebar oui-doc-preview-only">
  <div class="oui-sidebar-menu">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link">
          Category 1
        </button>
      </li>
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link">
          Category 2
        </button>
      </li>
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
          Category 3
        </button>
        <div class="oui-sidebar-menu">
          <header class="oui-sidebar-menu__header">
            <div class="oui-sidebar-menu__back">
              <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
              </button>
            </div>
            <p class="oui-sidebar-menu__breadcrumb">
              Manager
            </p>
            <p class="oui-sidebar-menu__title">
              Category 3
            </p>
          </header>
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
                Product 1
              </button>
              <div class="oui-sidebar-menu">
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav><nav class="oui-sidebar oui-doc-preview-only">
  <div class="oui-sidebar-menu">
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
        <div class="oui-sidebar-menu">
          <header class="oui-sidebar-menu__header">
            <div class="oui-sidebar-menu__back">
              <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
              </button>
            </div>
            <p class="oui-sidebar-menu__breadcrumb">
              Manager
            </p>
            <p class="oui-sidebar-menu__title">
              Category 3
            </p>
          </header>
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
                Product 1
              </button>
              <div class="oui-sidebar-menu">
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav><nav class="oui-sidebar">
  <!-- Root -->
  <div class="oui-sidebar-menu">
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
        <div class="oui-sidebar-menu">
          <header class="oui-sidebar-menu__header">
            <div class="oui-sidebar-menu__back">
              <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
              </button>
            </div>
            <p class="oui-sidebar-menu__breadcrumb">
              Manager
            </p>
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
              <div class="oui-sidebar-menu">
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
```

### Responsive variant

**Note**: With screen resolution below `1024px`, the Sidebar change its layout for something similar to the [Navbar](#!/ovh-ui-kit/navbar). This can be enabled by adding `.oui-sidebar-menu_fixed` on `oui-sidebar-menu` elements.

```html:preview
<div class="oui-doc-preview-only-keep-children" style="height:500px;padding:10px;display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;background-color:rgba(0,0,0,0.05);overflow-x:auto;"><nav class="oui-sidebar oui-doc-preview-only">
  <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
    <ul class="oui-sidebar-list">
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link">
          Category 1
        </button>
      </li>
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link">
          Category 2
        </button>
      </li>
      <li class="oui-sidebar-list__item">
        <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
          Category 3
        </button>
        <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
          <header class="oui-sidebar-menu__header">
            <div class="oui-sidebar-menu__back">
              <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
              </button>
            </div>
            <p class="oui-sidebar-menu__breadcrumb">
              Manager
            </p>
            <p class="oui-sidebar-menu__title">
              Category 3
            </p>
          </header>
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
                Product 1
              </button>
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav><nav class="oui-sidebar oui-doc-preview-only">
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
        <div class="oui-sidebar-menu oui-sidebar-menu_fixed">
          <header class="oui-sidebar-menu__header">
            <div class="oui-sidebar-menu__back">
              <button type="button" class="oui-button oui-button_link oui-button_icon-left" aria-label="Return to previous navigation menu">
                <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
              </button>
            </div>
            <p class="oui-sidebar-menu__breadcrumb">
              Manager
            </p>
            <p class="oui-sidebar-menu__title">
              Category 3
            </p>
          </header>
          <ul class="oui-sidebar-list">
            <li class="oui-sidebar-list__item">
              <button type="button" class="oui-sidebar-link oui-sidebar-link_active" aria-haspopup="true" aria-expanded="false">
                Product 1
              </button>
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav><nav class="oui-sidebar">
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
                    <a class="oui-sidebar-link oui-sidebar-link_active" href="">
                      Service 1
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 2
                    </a>
                  </li>
                  <li class="oui-sidebar-list__item">
                    <a class="oui-sidebar-link" href="">
                      Service 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 2
              </a>
            </li>
            <li class="oui-sidebar-list__item">
              <a class="oui-sidebar-link" href="">
                Product 3
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
```
