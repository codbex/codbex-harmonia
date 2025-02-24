import MenuSeparator from '@ui5/webcomponents/dist/MenuSeparator.js';

export default class HMenuSeparator extends MenuSeparator {
  constructor() {
    super();
  }
}

customElements.define('h-menu-separator', HMenuSeparator);
