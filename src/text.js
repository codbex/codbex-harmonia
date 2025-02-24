import Text from '@ui5/webcomponents/dist/Text.js';

export default class HText extends Text {
  constructor() {
    super();
  }
}

customElements.define('h-text', HText);
