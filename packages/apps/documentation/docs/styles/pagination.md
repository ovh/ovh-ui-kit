# Pagination

## Usage

### Button group

```html:preview
<div class="oui-pagination">
  <div class="oui-pagination__progress">
    <oui-dropdown arrow>
      <button type="button"
          class="oui-button oui-button_link"
          oui-dropdown-trigger>
          1 - 25</button>
      <oui-dropdown-content>
        <div role="menu" class="oui-pagination-menu">
          <div class="oui-pagination-menu__group">Results per page</div>
          <div class="oui-pagination-menu__items-list">
            <button type="button" class="oui-pagination-menu__item" disabled="disabled">25</button>
            <button type="button" class="oui-pagination-menu__item">50</button>
            <button type="button" class="oui-pagination-menu__item">100</button>
            <button type="button" class="oui-pagination-menu__item">300</button>
          </div>
        </div>
      </oui-dropdown-content>
    </oui-dropdown>
    <span>of 100 results</span>
  </div>

  <div class="oui-pagination__selector">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width"
      type="button"
      aria-label="Previous page">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
    </button>
    <div class="oui-button-group">
      <button class="oui-button oui-button_primary oui-button_small-width oui-pagination-button_selected" disabled="disabled">1</button>
      <button class="oui-button oui-button_secondary oui-button_small-width">2</button>
      <button class="oui-button oui-button_secondary oui-button_small-width">3</button>
      <button class="oui-button oui-button_secondary oui-button_small-width">4</button>
      <button class="oui-button oui-button_secondary oui-button_small-width">5</button>
    </div>
    <div class="oui-select oui-select_inline"
      ng-if="$ctrl.pageCount > 5">
      <select class="oui-select__input"
          ng-model="$ctrl.currentPage"
          ng-change="$ctrl.setPageNumber(page)"
          ng-options="page as $ctrl.capitalize($ctrl.config.words.page) + ' ' + page + ' ' + $ctrl.config.words.of + ' ' + $ctrl.pageCount for page in $ctrl.pagesList">
      </select>
      <span class="oui-icon oui-icon-chevron-down" aria-hidden="true"></span>
    </div>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width"
      type="button"
      aria-label="Next page">
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
  </div>
</div>
```

### Select

```html:preview
<div class="oui-pagination">
  <div class="oui-pagination__progress">
    <oui-dropdown arrow>
      <button type="button"
          class="oui-button oui-button_link"
          oui-dropdown-trigger>
          1 - 25</button>
      <oui-dropdown-content>
        <div role="menu" class="oui-pagination-menu">
          <div class="oui-pagination-menu__group">Results per page</div>
          <div class="oui-pagination-menu__items-list">
            <button type="button" class="oui-pagination-menu__item" disabled="disabled">25</button>
            <button type="button" class="oui-pagination-menu__item">50</button>
            <button type="button" class="oui-pagination-menu__item">100</button>
            <button type="button" class="oui-pagination-menu__item">300</button>
          </div>
        </div>
      </oui-dropdown-content>
    </oui-dropdown>
    <span>of 100 results</span>
  </div>

  <div class="oui-pagination__selector">
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width"
      type="button"
      aria-label="Previous page">
      <span class="oui-icon oui-icon-chevron-left" aria-hidden="true"></span>
    </button>
    <oui-dropdown>
      <oui-dropdown-trigger text="{{'Page 1 of 6'}}"></oui-dropdown-trigger>
      <oui-dropdown-content>
        <div role="menu" class="oui-pagination-menu">
          <div class="oui-pagination-menu__items-list">
            <button type="button" class="oui-pagination-menu__item" disabled="disabled">1</button>
            <button type="button" class="oui-pagination-menu__item">2</button>
            <button type="button" class="oui-pagination-menu__item">3</button>
            <button type="button" class="oui-pagination-menu__item">4</button>
            <button type="button" class="oui-pagination-menu__item">5</button>
            <button type="button" class="oui-pagination-menu__item">6</button>
          </div>
        </div>
      </oui-dropdown-content>
    </oui-dropdown>
    <button type="button" class="oui-button oui-button_secondary oui-button_icon-only oui-button_small-width"
      type="button"
      aria-label="Next page">
        <span class="oui-icon oui-icon-chevron-right" aria-hidden="true"></span>
      </button>
  </div>
</div>
```
