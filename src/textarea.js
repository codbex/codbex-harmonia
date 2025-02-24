import TextArea from '@ui5/webcomponents/dist/TextArea.js';

export default class HTextArea extends TextArea {
  constructor() {
    super();
  }
}

customElements.define('h-textarea', HTextArea);
