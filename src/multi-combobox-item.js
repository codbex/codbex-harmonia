import MultiComboBoxItem from '@ui5/webcomponents/dist/MultiComboBoxItem.js';

export default class HMultiComboBoxItem extends MultiComboBoxItem {
  static get observedAttributes() {
    return ['value'].concat(super.observedAttributes);
  }

  constructor() {
    super();
    if (this.hasAttribute('value')) {
      this.value = this.getAttribute('value');
    }
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    super.attributeChangedCallback(attribute, oldValue, newValue);
    if (attribute === 'value') {
      this.value = newValue;
    }
  }
}

customElements.define('h-mcb-item', HMultiComboBoxItem);
