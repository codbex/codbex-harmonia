import Input from '@ui5/webcomponents/dist/Input.js';

export default class HInput extends Input {
  constructor() {
    super();
    this.model = {
      init: false,
      modifiers: {
        // Supported modifiers
        fill: undefined,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this.model.init = true;
        if (attr.name.includes('.fill')) this.model.modifiers.fill = this.getAttribute('value');
        break;
      }
    }
  }

  valueChange() {
    this._x_model.set(this.value);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.model.init) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._x_removeModelListeners['default']) {
            this._x_removeModelListeners['default']();
            delete this._x_removeModelListeners['default'];
          }
          if (this.model.modifiers.fill !== undefined) {
            this.value = this.model.modifiers.fill;
            this._x_model.set(this.value);
            this.model.modifiers.fill = undefined;
          }
          this.addEventListener('input', this.valueChange);
        }
      }, 1);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('input', this.valueChange);
  }
}

customElements.define('h-input', HInput);
