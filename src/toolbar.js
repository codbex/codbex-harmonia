import Toolbar from '@ui5/webcomponents/dist/Toolbar.js';

export default class HToolbar extends Toolbar {
  constructor() {
    super();
  }
}

customElements.define('h-toolbar', HToolbar);
