import StepInput from '@ui5/webcomponents/dist/StepInput.js';

export default class HStepInput extends StepInput {
  constructor() {
    super();
    this._model = {
      init: false,
      modifiers: {
        // Supported modifiers
        fill: false,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        this._model.modifiers.fill = attr.name.includes('.fill');
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
          if (this._model.modifiers.fill && !this._x_model.get()) {
            this._x_model.set(this.value);
          }
          this._model.modifiers.fill = false;
          this.addEventListener('change', this.valueChange);
        }
      }, 1);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.valueChange);
  }
}

customElements.define('h-step-input', HStepInput);
