import FormItem from '@ui5/webcomponents/dist/FormItem.js';

export default class HFormItem extends FormItem {
  constructor() {
    super();
  }
}

customElements.define('h-form-item', HFormItem);
