import ToggleButton from '@ui5/webcomponents/dist/ToggleButton.js';

export default class HToggleButton extends ToggleButton {
  constructor() {
    super();
  }
}

customElements.define('h-toggle-button', HToggleButton);
