import MultiInput from '@ui5/webcomponents/dist/MultiInput.js';

export default class HMultiInput extends MultiInput {
  constructor() {
    super();
  }

  createTokenFromText(text) {
    let token = document.createElement('h-token');
    token.setAttribute('text', text);
    token.setAttribute('slot', 'tokens');
    return token;
  }

  valueChange(event) {
    if (!event.target.value) return;
    const isDuplicate = event.target.tokens.some((token) => token.text === event.target.value);
    if (isDuplicate) {
      event.target.valueState = 'Negative';
      setTimeout(() => {
        event.target.valueState = 'None';
      }, 2000);
      return;
    }
    event.target.appendChild(this.createTokenFromText(event.target.value));
  }

  valueDelete(event) {
    const tokens = event.detail?.tokens;
    event.removed = [];

    if (tokens) {
      tokens.forEach((token) => {
        event.removed.push(token.text);
        token.remove();
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.valueChange);
    this.addEventListener('token-delete', this.valueDelete);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.valueChange);
    this.removeEventListener('token-delete', this.valueDelete);
  }
}

customElements.define('h-multi-input', HMultiInput);
