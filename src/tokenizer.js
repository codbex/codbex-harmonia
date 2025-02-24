import Tokenizer from '@ui5/webcomponents/dist/Tokenizer.js';

export default class HTokenizer extends Tokenizer {
  constructor() {
    super();
  }
}

customElements.define('h-tokenizer', HTokenizer);
