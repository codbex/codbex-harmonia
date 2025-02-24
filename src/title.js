import Title from '@ui5/webcomponents/dist/Title.js';

export default class HTitle extends Title {
  constructor() {
    super();
  }
}

customElements.define('h-title', HTitle);
