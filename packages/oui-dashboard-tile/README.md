# oui-dashboard-tile

<component-status cx-design="complete" ux="rc"></component-status>

## Installation

```less
@import 'oui-dashboard-tile/dashboard-tile';
```

## Usage

```html:preview
<div class="oui-dashboard-tile">
  <h5 class="oui-header_5 oui-dashboard-tile__header">Information</h5>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item">
    <div class="oui-dashboard-tile__item-title">
      Status
    </div>
    <button class="oui-button oui-button_secondary">
      Active
    </button>
  </div>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item">
    <div class="oui-dashboard-tile__item-title">
      6 Front-ends
    </div>
    <div>
      <span class="oui-status oui-status_success">2 of 6 active</span>
    </div>
    <div>
      <span class="oui-status oui-status_warning">3 of 6 with warnings</span>
    </div>
    <div>
      <span class="oui-status oui-status_error">1 of 6 with errors</span>
    </div>
  </div>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item-container">
    <div class="oui-dashboard-tile__item">
      <div class="oui-dashboard-tile__item-title">
        Main Domain
      </div>
      <div>
        <a href="#" class="oui-link oui-link_icon">
          mydomainname.com
        </a>
      </div>
    </div>
    <button class="oui-action-menu-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="-1 -1 74 74">
        <circle class="oui-action-menu-button__foreground" cx="22.27" cy="36" r="4"></circle>
        <circle class="oui-action-menu-button__foreground" cx="36.20" cy="36" r="4"></circle>
        <circle class="oui-action-menu-button__foreground" cx="50.13" cy="36" r="4"></circle>
      </svg>
    </button>
  </div>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item">
    <div class="oui-dashboard-tile__item-title">
      IPv4
    </div>
    <div>
      37.59.16.168
    </div>
  </div>
</div>
```

### Shortcuts

```html:preview
<div class="oui-dashboard-tile">
  <h5 class="oui-header_5 oui-dashboard-tile__header">Shortcuts</h5>
  <div class="oui-dashboard-tile__divider"></div>
  <button type="button" class="oui-dashboard-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">
    Associate a domain name
    <i class="oui-icon oui-icon-chevron-right" aria-label="Button 1"></i>
  </button>
  <button type="button" class="oui-dashboard-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">
    Execute a diagnostic
    <i class="oui-icon oui-icon-chevron-right" aria-label="Button 1"></i>
  </button>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item">
    <div class="oui-dashboard-tile__item-title">
      Associated Sharepoint service
    </div>
    <div>
      <a href="#" class="oui-link">
        sharepoint-fg5643-1
      </a>
    </div>
  </div>
  <div class="oui-dashboard-tile__item">
    <div class="oui-dashboard-tile__item-title">
      Checking URL
    </div>
    <div>
      <a href="#" class="oui-link oui-link_icon">
        https://mysp.ovh.net
        <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
      </a>
    </div>
  </div>
  <div class="oui-dashboard-tile__divider"></div>
  <div class="oui-dashboard-tile__item">
    <a href="#" class="oui-link">
      Migrate to Exchange 2016
    </a>
  </div>
</div>
```
