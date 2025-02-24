import ComboBoxItem from '@ui5/webcomponents/dist/ComboBoxItem.js';

export default class HComboBoxItem extends ComboBoxItem {
  constructor() {
    super();
  }
}

customElements.define('h-combobox-item', HComboBoxItem);
