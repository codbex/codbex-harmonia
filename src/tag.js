import Tag from '@ui5/webcomponents/dist/Tag.js';

export default class HTag extends Tag {
  constructor() {
    super();
  }
}

customElements.define('h-tag', HTag);
