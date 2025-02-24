import CardHeader from '@ui5/webcomponents/dist/CardHeader.js';

export default class HCardHeader extends CardHeader {
  constructor() {
    super();
  }
}

customElements.define('h-card-header', HCardHeader);
