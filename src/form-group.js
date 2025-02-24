import FormGroup from '@ui5/webcomponents/dist/FormGroup.js';

export default class HFormGroup extends FormGroup {
  constructor() {
    super();
  }
}

customElements.define('h-form-group', HFormGroup);
