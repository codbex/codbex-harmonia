import Dialog from '@ui5/webcomponents/dist/Dialog.js';

export default class HDialog extends Dialog {
  constructor() {
    super();
  }
}

customElements.define('h-dialog', HDialog);
