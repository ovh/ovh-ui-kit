# oui-action-menu

<component-status cx-design="complete" ux="prototype"></component-status>

oui-action-menu is a package which provide styles action buttons in a dropdown.

```html:preview
<div style="border: 1px #BDBDBD solid; width: 250px" class="oui-doc-preview-only-keep-children">
  <div role="menu" class="oui-action-menu">
    <div role="menuitem" class="oui-action-menu__item">
      <button class="oui-button oui-button_action-menu">Action 1</button>
    </div>
    <div role="menuitem" class="oui-action-menu__item">
      <button class="oui-button oui-button_action-menu">Action 2</button>
    </div>
    <div role="menuitem" class="oui-action-menu__item">
      <button class="oui-button oui-button_action-menu" disabled>Action 3 (disabled)</button>
    </div>
    <div role="menuitem" class="oui-action-menu__item">
      <button class="oui-button oui-button_action-menu">A veeeeeeery looooooooong action here</button>
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
```
