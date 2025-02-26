import Input from '@ui5/webcomponents/dist/Input.js';

export default class HInput extends Input {
  constructor() {
    super();
    this._model = {
      init: false,
      modifiers: {
        // Supported modifiers
        fill: undefined,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        if (attr.name.includes('.fill')) this._model.modifiers.fill = this.getAttribute('value');
        break;
      }
    }
  }

  valueChange() {
    this._x_model.set(this.value);
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
          }
          if (this._model.modifiers.fill !== undefined && !this._x_model.get()) {
            this.value = this._model.modifiers.fill;
            this._x_model.set(this.value);
            this._model.modifiers.fill = undefined;
          } else this._model.modifiers.fill = undefined;
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
