export default {
  title: 'Design System/Content/List',

  parameters: {
    docs: { iframeHeight: 500 },
  },
};

export const Default = () => `
<div class="oui-list">
  <ul>
    <li class="oui-list__group">
      <span>Item 1</span>
      <ul>
        <li><a href="#">Item 1.1</a></li>
        <li><a href="#">Item 1.2</a></li>
        <li><a href="#">Item 1.3</a></li>
      </ul>
    </li>
    <li class="oui-list__group">
      <span>Item 2</span>
      <ul>
        <li>
          <span class="oui-list__text">Item 2.1</span>
          <ul>
            <li>
              <span class="oui-list__text">Item 2.1.1</span>
              <ul>
                <li><a href="#">Item 2.1.1.1</a></li>
                <li><a href="#">Item 2.1.1.2</a></li>
                <li><a href="#">Item 2.1.1.3</a></li>
              </ul>
            </li>
            <li><span class="oui-list__text">Item 2.1.2</span></li>
            <li><span class="oui-list__text">Item 2.1.3</span></li>
          </ul>
        </li>
        <li><span class="oui-list__text">Item 2.2</span></li>
        <li><span class="oui-list__text">Item 2.3</span></li>
      </ul>
    </li>
    <li><a href="#">Item 3</a></li>
    <li class="oui-list__item_current"><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
    <li><a href="#">Item 6</a></li>
  </ul>
</div>`;

export const Separated = () => `
<div class="oui-list oui-list_separated">
  <ul>
    <li class="oui-list__group">
      <span>Item 1</span>
      <ul>
        <li><a href="#">Item 1.1</a></li>
        <li><a href="#">Item 1.2</a></li>
        <li><a href="#">Item 1.3</a></li>
      </ul>
    </li>
    <li class="oui-list__group">
      <span>Item 2</span>
      <ul>
        <li>
          <span class="oui-list__text">Item 2.1</span>
          <ul>
            <li>
              <span class="oui-list__text">Item 2.1.1</span>
              <ul>
                <li><a href="#">Item 2.1.1.1</a></li>
                <li><a href="#">Item 2.1.1.2</a></li>
                <li><a href="#">Item 2.1.1.3</a></li>
              </ul>
            </li>
            <li><span class="oui-list__text">Item 2.1.2</span></li>
            <li><span class="oui-list__text">Item 2.1.3</span></li>
          </ul>
        </li>
        <li><span class="oui-list__text">Item 2.2</span></li>
        <li><span class="oui-list__text">Item 2.3</span></li>
      </ul>
    </li>
    <li><a href="#">Item 3</a></li>
    <li class="oui-list__item_current"><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
    <li><a href="#">Item 6</a></li>
  </ul>
</div>`;
