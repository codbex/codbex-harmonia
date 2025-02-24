import ComboBox from '@ui5/webcomponents/dist/ComboBox.js';

export default class HComboBox extends ComboBox {
  constructor() {
    super();
  }
}

customElements.define('h-combobox', HComboBox);
