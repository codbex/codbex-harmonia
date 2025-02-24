import SuggestionItem from '@ui5/webcomponents/dist/SuggestionItem.js';

export default class HSuggestionItem extends SuggestionItem {
  constructor() {
    super();
  }
}

customElements.define('h-suggestion-item', HSuggestionItem);
