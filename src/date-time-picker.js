import DateTimePicker from '@ui5/webcomponents/dist/DateTimePicker.js';

export default class HDateTimePicker extends DateTimePicker {
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
        if (attr.name.includes('.fill') && this.hasAttribute('value')) {
          this._model.modifiers.fill = this.getAttribute('value');
        }
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
            this._x_model.set(this._model.modifiers.fill);
          }
          this._model.modifiers.fill = undefined;
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

customElements.define('h-datetime-picker', HDateTimePicker);
