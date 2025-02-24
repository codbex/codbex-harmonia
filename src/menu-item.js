import MenuItem from '@ui5/webcomponents/dist/MenuItem.js';

export default class HMenuItem extends MenuItem {
  constructor() {
    super();
  }
}

customElements.define('h-menu-item', HMenuItem);
