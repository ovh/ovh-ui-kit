# oui-list

<component-status cx-design="partial" ux="rc"></component-status>

oui-list is a package which provide styles for the list component.

## Installation

```less
@import 'oui-list/list';
```

## Usage

### Normal

```html:preview
<div class="oui-list">
  <ul class="oui-list__items">
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">Item 1</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.1</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.2</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.3</a></li>
      </ul>
    </li>
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">Item 2</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item">
          <span class="oui-list__text">Item 2.1</span>
          <ul class="oui-list__sub-items">
            <li class="oui-list__sub-item">
              <span class="oui-list__text">Item 2.1.1</span>
              <ul class="oui-list__sub-items">
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.1</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.2</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.3</a></li>
              </ul>
            </li>
            <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.1.2</span></li>
            <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.1.3</span></li>
          </ul>
        </li>
        <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.2</span></li>
        <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.3</span></li>
      </ul>
    </li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 3</a></li>
    <li class="oui-list__item oui-list__item_current"><a href="#" class="oui-list__link">Item 4</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 5</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 6</a></li>
  </ul>
</div>
```

### Separated

```html:preview
<div class="oui-list oui-list_separated">
  <ul class="oui-list__items">
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">Item 1</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.1</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.2</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.3</a></li>
      </ul>
    </li>
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">Item 2</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item">
          <span class="oui-list__text">Item 2.1</span>
          <ul class="oui-list__sub-items">
            <li class="oui-list__sub-item">
              <span class="oui-list__text">Item 2.1.1</span>
              <ul class="oui-list__sub-items">
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.1</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.2</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.3</a></li>
              </ul>
            </li>
            <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.1.2</span></li>
            <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.1.3</span></li>
          </ul>
        </li>
        <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.2</span></li>
        <li class="oui-list__sub-item"><span class="oui-list__text">Item 2.3</span></li>
      </ul>
    </li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 3</a></li>
    <li class="oui-list__item oui-list__item_current"><a href="#" class="oui-list__link">Item 4</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 5</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 6</a></li>
  </ul>
</div>
```

### Nav

```html:preview
<div class="oui-list oui-list_nav">
  <ul class="oui-list__items">
    <li class="oui-list__group">
      <span class="oui-list__header">Item 1</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.1</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.2</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 1.3</a></li>
      </ul>
    </li>
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">Item 2</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item">
          <span class="oui-list__text">Item 2.1</span>
          <ul class="oui-list__sub-items">
            <li class="oui-list__sub-item">
              <span class="oui-list__text">Item 2.1.1</span>
              <ul class="oui-list__sub-items">
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.1</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.2</a></li>
                <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.1.3</a></li>
              </ul>
            </li>
            <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.2</a></li>
            <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.1.3</a></li>
          </ul>
        </li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.2</a></li>
        <li class="oui-list__sub-item"><a href="#" class="oui-list__link">Item 2.3</a></li>
      </ul>
    </li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 3</a></li>
    <li class="oui-list__item oui-list__item_current"><a href="#" class="oui-list__link">Item 4</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 5</a></li>
    <li class="oui-list__item"><a href="#" class="oui-list__link">Item 6</a></li>
  </ul>
</div>
```

### Steps

```html:preview
<div class="oui-list_steps oui-list_separated">
  <ul class="oui-list__items">
    <li class="oui-list__item oui-list__group">
      <span class="oui-list__header">List item</span>
      <ul class="oui-list__sub-items">
        <li class="oui-list__sub-item">
          <a href="#" class="oui-list__link">Item 1.1</a>
        </li>
        <li class="oui-list__sub-item">
          <a href="#" class="oui-list__link">Item 1.2</a>
        </li>
      </ul>
    </li>
    <li class="oui-list__item oui-list__item_disabled">
      <span class="oui-list__header">List item disabled</span>
    </li>
    <li class="oui-list__item oui-list__item_checked">
      <span class="oui-list__header">List item checked</span>
      <span class="oui-list__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis massa. Aenean eu placerat mi.
        Etiam ultricies metus ante, vel condimentum orci mollis at.
      </span>
    </li>
    <li class="oui-list__item oui-list__item_checked oui-list__item_disabled">
      <span class="oui-list__header">List item checked disabled</span>
    </li>
    <li class="oui-list__item oui-list__item_complete">
      <a href="#" class="oui-list__header">List item complete</a>
      <span class="oui-list__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis massa. Aenean eu placerat mi.
        Etiam ultricies metus ante, vel condimentum orci mollis at.
      </span>
    </li>
    <li class="oui-list__item oui-list__item_optional oui-list__item_checked">
      <span class="oui-list__header">Optional list item checked</span>
      <span class="oui-list__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis massa. Aenean eu placerat mi.
        Etiam ultricies metus ante, vel condimentum orci mollis at.
      </span>
    </li>
    <li class="oui-list__item oui-list__item_optional oui-list__item_checked oui-list__item_disabled">
      <span class="oui-list__header">Optional list item checked disabled</span>
    </li>
    <li class="oui-list__item oui-list__item_optional oui-list__item_checked oui-list__item_complete">
      <span class="oui-list__header">Optional list item complete</span>
      <span class="oui-list__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis massa. Aenean eu placerat mi.
        Etiam ultricies metus ante, vel condimentum orci mollis at.
      </span>
    </li>
    <li class="oui-list__item">
      <div class="oui-checkbox oui-checkbox_m">
        <input class="oui-checkbox__input" id="oui-checkbox-5" name="oui-checkbox-5" type="checkbox">
        <label class="oui-checkbox__label-container" for="oui-checkbox-5">
          <span class="oui-checkbox__label">Checkbox list item</span>
          <span class="oui-checkbox__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id convallis massa. Aenean eu placerat mi.
            Etiam ultricies metus ante, vel condimentum orci mollis at.
          </span>
          <span class="oui-checkbox__icon">
            <i class="oui-icon oui-icon-checkbox-unchecked" aria-hidden="true"></i>
            <i class="oui-icon oui-icon-checkbox-checked" aria-hidden="true"></i>
            <i class="oui-icon oui-icon-checkbox-checkmark" aria-hidden="true"></i>
          </span>
        </label>
      </div>
    </li>
  </ul>
</div>
```

## Mixins

```less
@import 'oui-list/_mixins';
```

### .list

Define the base styles for a list.

```less
#oui > .list(
  @oui-list-selector
);
```

```less
#oui > .list(
  @selector: Class,
  @background-color: Color,
  @item-border: Keyword,
  @title-color: Color,
  @link-color: Color,
  @link-active-color: Color,
  @link-active-background-color: Color,
  @title-font-size: Number,
  @font-size: Number,
  @padding: Number,
  @header-padding: Number,
  @item-padding: Number
);
```

### .list-separated

Will stylize your list with separator between each items.

```less
#oui > .list-separated(
  @oui-list-selector
);
```

```less
.list-separated (
  @selector: Class,
  @separator-color: Color,
  @separator-size: Number
)
```

### .list-nav

Will stylize your list as a nav one.

```less
#oui > .list-nav(
  @oui-list-selector
);
```

```less
#oui > .list-nav(
  @selector: Class,
  @background-color: Color,
  @item-border: Keyword,
  @title-color: Color,
  @link-color: Color,
  @link-active-color: Color,
  @link-active-background-color: Color,
  @title-font-size: Number,
  @font-size: Number,
  @padding: Number,
  @header-padding: Number,
  @item-padding: Number
);
```

### .list-steps

Will stylize your list as a stepped one.

```less
#oui > .list-steps(
  @oui-list-selector,
  @oui-checkbox-selector
);
```

```less
#oui > .list-steps(
  @selector: Class,
  @checkbox-selector: Class,
  @font-color: Color,
  @icon-color: Color,
  @font-color-disabled: Color,
  @icon-color-disabled: Color,
  @font-color-checked: Color,
  @icon-color-checked: Color,
  @icon-border-color-checked: Color,
  @font-color-complete: Color,
  @icon-color-complete: Color,
  @font-size: Number,
  @font-weight: Number,
  @icon-size: Number,
  @icon-check-size: Number,
  @icon-spacing: Number,
  @border-color: Color,
  @border-width: Number,
  @padding: Number,
  @spacing: Number
);
```
