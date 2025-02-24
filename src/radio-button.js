import RadioButton from '@ui5/webcomponents/dist/RadioButton.js';

export default class HRadioButton extends RadioButton {
  constructor() {
    super();
    this.type = 'radio';
  }
}

customElements.define('h-radio-button', HRadioButton);
