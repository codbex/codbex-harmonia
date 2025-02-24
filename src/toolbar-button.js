import ToolbarButton from '@ui5/webcomponents/dist/ToolbarButton.js';

export default class HToolbarButton extends ToolbarButton {
  constructor() {
    super();
  }
}

customElements.define('h-toolbar-button', HToolbarButton);
