import MultiComboBox from '@ui5/webcomponents/dist/MultiComboBox.js';

export default class HMultiComboBox extends MultiComboBox {
  constructor() {
    super();
  }
}

customElements.define('h-multi-combobox', HMultiComboBox);
