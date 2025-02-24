import Button from '@ui5/webcomponents/dist/Button.js';

export default class HButton extends Button {
  constructor() {
    super();
  }
}

customElements.define('h-button', HButton);
