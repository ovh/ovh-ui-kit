import readme from '@ovh-ux/ui-kit.badge/README.md';

export default {
  title: 'Design System/Components/Badge/Native',

  parameters: {
    notes: readme,
    options: {
      showPanel: true,
    },
  },
};

export const Notification = () => `
  <div>
    <span class="oui-badge">Default</span>
    <span class="oui-badge oui-badge_info">Info</span>
    <span class="oui-badge oui-badge_success">Success</span>
    <span class="oui-badge oui-badge_warning">Warning</span>
    <span class="oui-badge oui-badge_error">Error</span>
  </div>

  <div>
    <span class="oui-badge oui-badge_s">Default</span>
    <span class="oui-badge oui-badge_s oui-badge_info">Info</span>
    <span class="oui-badge oui-badge_s oui-badge_success">Success</span>
    <span class="oui-badge oui-badge_s oui-badge_warning">Warning</span>
    <span class="oui-badge oui-badge_s oui-badge_error">Error</span>
  </div>`;

export const Product = () => `
  <div>
    <span class="oui-badge oui-badge_alpha">Alpha</span>
    <span class="oui-badge oui-badge_beta">Beta</span>
    <span class="oui-badge oui-badge_new">New</span>
    <span class="oui-badge oui-badge_soon">Soon</span>
    <span class="oui-badge oui-badge_promotion">Promotion</span>
    <span class="oui-badge oui-badge_price-drop">Price Drop</span>
    <span class="oui-badge oui-badge_sold-out">SOLD OUT</span>
    <span class="oui-badge oui-badge_best-seller">Best Seller</span>
    <span class="oui-badge oui-badge_limited-edition">Limited Edition</span>
  </div>

  <div>
    <span class="oui-badge oui-badge_s oui-badge_alpha">Alpha</span>
    <span class="oui-badge oui-badge_s oui-badge_beta">Beta</span>
    <span class="oui-badge oui-badge_s oui-badge_new">New</span>
    <span class="oui-badge oui-badge_s oui-badge_soon">Soon</span>
    <span class="oui-badge oui-badge_s oui-badge_promotion">Promotion</span>
    <span class="oui-badge oui-badge_s oui-badge_price-drop">Price Drop</span>
    <span class="oui-badge oui-badge_s oui-badge_sold-out">SOLD OUT</span>
    <span class="oui-badge oui-badge_s oui-badge_best-seller">Best Seller</span>
    <span class="oui-badge oui-badge_s oui-badge_limited-edition">Limited Edition</span>
  </div>`;

export const Delivery = () => `
  <div>
    <span class="oui-badge oui-badge_delivery-120-seconds">120s</span>
    <span class="oui-badge oui-badge_delivery-24-hours">24h</span>
    <span class="oui-badge oui-badge_delivery-72-hours">72h</span>
    <span class="oui-badge oui-badge_delivery-10-days">10d</span>
  </div>

  <div>
    <span class="oui-badge oui-badge_s oui-badge_delivery-120-seconds">120s</span>
    <span class="oui-badge oui-badge_s oui-badge_delivery-24-hours">24h</span>
    <span class="oui-badge oui-badge_s oui-badge_delivery-72-hours">72h</span>
    <span class="oui-badge oui-badge_s oui-badge_delivery-10-days">10d</span>
  </div>`;
