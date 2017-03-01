# oui-list

oui-list is a package which provide styles for the list component.

## Installation

```less
  @import 'oui-list/list';
```

## Usage

```html:preview
<div class="oui-list">
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

## Mixins

```less
  @import 'oui-list/list/_mixins';
```

### .list

Define the base styles for a list.

```less
#oui > .list();
```

```less
#oui > .list(
  @selector,
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
  @item-padding: Number,
);
```

### .list-nav

Will stylize your list as a nav one.

```less
#oui > .list-nav();
```

```less
#oui > .list-nav(
  @selector,
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
