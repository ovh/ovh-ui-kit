# oui-guide

<component-status cx-design="complete" ux="rc"></component-status>

oui-guide is a package which provide styles action buttons in a dropdown and uses action items.

## Installation

```less
  @import 'oui-button-guide/button-guide';
```
## Usage

```html:preview
<div style="border: 1px #BDBDBD solid; width: 300px" class="oui-doc-preview-only-keep-children">
<div class="oui-guide">
    <div class="oui-guide__body">
        <div role="menu" class="oui-action-menu">
            <div role="menuitem" class="oui-action-menu__item">
                <a href="#" class="oui-button oui-button_action-menu">
                    Action 1
                <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
              </a>
            </div>
            <div role="menuitem" class="oui-action-menu__item">
              <a href="#" class="oui-button oui-button_action-menu">
                Action 2
                <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
              </a>
            </div>
            <div role="menuitem" class="oui-action-menu__item">
                <a href="#" class="oui-button oui-button_action-menu">
                    A veeeeeeery looooooooong action here
                    <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
                </a>
            </div>
            <div role="separator" class="oui-action-menu__divider"></div>
            <div role="menuitem" class="oui-action-menu__item">
              <a href="#" class="oui-button oui-button_action-menu">
                About us
                <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
              </a>
            </div>
        </div>
    </div>

    <div class="oui-guide__footer">
        <div class="oui-action-menu__divider"></div>
        <div class="oui-action-menu__item">
            <a class="oui-button oui-button_action-menu" href="#" target="_blank" rel="noopener">
                <span>footer</span>
                <i class="oui-icon oui-icon-external_link" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
```