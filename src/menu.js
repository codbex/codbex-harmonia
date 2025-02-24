import Menu from '@ui5/webcomponents/dist/Menu.js';

export default class HMenu extends Menu {
  constructor() {
    super();
  }
}

customElements.define('h-menu', HMenu);
