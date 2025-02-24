import ProductSwitch from '@ui5/webcomponents-fiori/dist/ProductSwitch.js';

export default class HProductSwitch extends ProductSwitch {
  constructor() {
    super();
  }
}

customElements.define('h-product-switch', HProductSwitch);
