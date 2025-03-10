import CheckBox from '@ui5/webcomponents/dist/CheckBox.js';

export default class HCheckBox extends CheckBox {
  constructor() {
    super();
    this.type = 'checkbox';
    this._model = {
      // Array model not supported
      init: false,
      modifiers: {
        // Supported modifiers
        fill: undefined,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        if (attr.name.includes('.fill')) {
          if (this.hasAttribute('value')) {
            this._model.modifiers.fill = this.getAttribute('value');
            this.checked = true;
          } else this._model.modifiers.fill = this.hasAttribute('checked');
        }
        break;
      }
    }
  }

  valueChange() {
    if (this.hasAttribute('value')) {
      if (this.checked) this._x_model.set(this.getAttribute('value'));
      else this._x_model.set(undefined);
    } else {
      this._x_model.set(this.checked);
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
          }
          if (this._model.modifiers.fill !== undefined && (this._x_model.get() === undefined || this._x_model.get() === null || this._x_model.get() === '')) {
            this._x_model.set(this._model.modifiers.fill);
          } else if (this.hasAttribute('value')) {
            if (this.getAttribute('value') === this._x_model.get()) {
              this.checked = true;
            } else {
              this.checked = false;
            }
          } else {
            if (this._x_model.get()) {
              this.checked = true;
            } else this.checked = false;
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

customElements.define('h-checkbox', HCheckBox);
