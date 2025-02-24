import Label from '@ui5/webcomponents/dist/Label.js';

export default class HLabel extends Label {
  constructor() {
    super();
  }
}

customElements.define('h-label', HLabel);
