export default {
  title: 'Legacy/Components/List/Native',

  parameters: {
  },
};

export const Normal = () => `
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
</div>`;

export const Separated = () => `
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
</div>`;

export const Navigation = () => `
<nav class="oui-list oui-list_nav">
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
</nav>`;
