import Link from '@ui5/webcomponents/dist/Link.js';

export default class HLink extends Link {
  constructor() {
    super();
  }
}

customElements.define('h-link', HLink);
