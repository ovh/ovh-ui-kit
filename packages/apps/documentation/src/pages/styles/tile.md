# Tile

## Usage

### Buttons tile

```html:preview
<div class="oui-tile">
    <h4 class="oui-heading_4 oui-tile__title">Buttons</h4>
    <div class="oui-tile__body">
        <div class="oui-tile__item oui-tile__item_button">
            <button type="button" class="oui-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">
                Button 1
                <span class="oui-icon oui-icon-chevron-right" aria-label="Button 1"></span>
            </button>
        </div>
        <div class="oui-tile__item oui-tile__item_button">
            <button disabled type="button" class="oui-tile__button oui-button oui-button_link oui-button_icon-right oui-button_full-width">
                Button 2
                <span class="oui-icon oui-icon-chevron-right" aria-label="Button 2"></span>
            </button>
        </div>
    </div>
</div>
```


### List of definition tile

```html:preview
<div class="oui-tile">
    <h4 class="oui-heading_4 oui-tile__title">List definition</h4>
    <p class="oui-tile__legend">Consectetur adipisicing elit.</p>
    <div class="oui-tile__body">
        <div class="oui-tile__item">
            <dl class="oui-tile__definition">
                <dt class="oui-tile__term">Foo</dt>
                <dd class="oui-tile__description">bar</dd>
            </dl>
        </div>
        <div class="oui-tile__item">
            <dl class="oui-tile__definition">
                <dt class="oui-tile__term">Baz</dt>
                <dd class="oui-tile__description">
                    qux
                    <small class="oui-tile__extra">(quux)</small>
                </dd>
            </dl>
            <div class="oui-tile__actions">
                <oui-action-menu compact placement="end">
                    <oui-action-menu-item href="#">Action 1 (link)</oui-action-menu-item>
                    <oui-action-menu-item on-click="$ctrl.onActionClick()">Action 2 (button)</oui-action-menu-item>
                    <oui-action-menu-item disabled>Action 3 (disabled)</oui-action-menu-item>
                    <oui-action-menu-divider></oui-action-menu-divider>
                    <oui-action-menu-item href="#" external>External link</oui-action-menu-item>
                </oui-action-menu>
            </div>
        </div>
    </div>
</div>
```

### Custom tile

```html:preview
<div class="oui-tile">
    <h4 class="oui-heading_4 oui-tile__title">List definition</h4>
    <div class="oui-tile__body">
        Custom content goes here
    </div>
</div>
```
