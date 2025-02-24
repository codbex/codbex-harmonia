import ExpandableText from '@ui5/webcomponents/dist/ExpandableText.js';

export default class HExpandableText extends ExpandableText {
  constructor() {
    super();
  }
}

customElements.define('h-expandable-text', HExpandableText);
