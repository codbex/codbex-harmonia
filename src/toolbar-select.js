import ToolbarSelect from '@ui5/webcomponents/dist/ToolbarSelect.js';

export default class HToolbarSelect extends ToolbarSelect {
  constructor() {
    super();
  }
}

customElements.define('h-toolbar-select', HToolbarSelect);
