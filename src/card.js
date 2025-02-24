import Card from '@ui5/webcomponents/dist/Card.js';

export default class HCard extends Card {
  constructor() {
    super();
  }
}

customElements.define('h-card', HCard);
