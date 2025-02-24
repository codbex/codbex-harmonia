import Form from '@ui5/webcomponents/dist/Form.js';

export default class HForm extends Form {
  constructor() {
    super();
  }
}

customElements.define('h-form', HForm);
