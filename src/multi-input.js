import MultiInput from '@ui5/webcomponents/dist/MultiInput.js';

export default class HMultiInput extends MultiInput {
  createTokenFromText(text) {
    let token = document.createElement('h-token');
    token.setAttribute('text', text);
    token.setAttribute('slot', 'tokens');
    return token;
  }

  constructor() {
    super();
    this._model = {
      init: false,
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        if (attr.name.includes('.fill')) {
          console.error('h-multi-input: Input does not support the ".fill" modifier.');
        }
        break;
      }
    }
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
    const modelValues = this._x_model.get();
    modelValues.push(event.target.value);
    event.target.value = '';
  }

  valueDelete(event) {
    const tokens = event.detail?.tokens;

    if (tokens) {
      const modelValues = this._x_model.get();
      tokens.forEach((token) => {
        const index = modelValues.indexOf(token['text']);
        if (index > -1) modelValues.splice(index, 1);
        token.remove();
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._model.init) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._x_removeModelListeners['default']) {
            this._x_removeModelListeners['default']();
            delete this._x_removeModelListeners['default'];
            this._x_forceModelUpdate = () => {};
          }
          this.addEventListener('change', this.valueChange);
          this.addEventListener('token-delete', this.valueDelete);
        }
      }, 1);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.valueChange);
    this.removeEventListener('token-delete', this.valueDelete);
  }
}

customElements.define('h-multi-input', HMultiInput);
