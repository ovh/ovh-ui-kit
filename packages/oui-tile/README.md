# oui-tile

<component-status cx-design="partial" ux="rc"></component-status>

## Installation

```less
@import 'oui-tile/tile';
```

## Usage

### Buttons tile

```html:preview
<div class="oui-tile">
    <h4 class="oui-header_4 oui-tile__title">Buttons</h4>
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
    <h4 class="oui-header_4 oui-tile__title">List definition</h4>
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
                <div class="oui-dropdown">
                    <button class="oui-action-menu-button oui-dropdown__trigger"
                        type="button"
                        aria-haspopup="true" aria-expanded="true" aria-label="Baz: actions">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                            <circle class="oui-action-menu-button__foreground" cx="22.27" cy="36" r="4"></circle>
                            <circle class="oui-action-menu-button__foreground" cx="36.20" cy="36" r="4"></circle>
                            <circle class="oui-action-menu-button__foreground" cx="50.13" cy="36" r="4"></circle>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Custom tile

```html:preview
<div class="oui-tile">
    <h4 class="oui-header_4 oui-tile__title">List definition</h4>
    <div class="oui-tile__body">
        Custom content goes here
    </div>
</div>
```
