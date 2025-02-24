import ProductSwitchItem from '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';

export default class HProductSwitchItem extends ProductSwitchItem {
  constructor() {
    super();
  }
}

customElements.define('h-product-switch-item', HProductSwitchItem);
