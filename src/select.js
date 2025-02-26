import Select from '@ui5/webcomponents/dist/Select.js';

export default class HSelect extends Select {
  constructor() {
    super();
    this._model = {
      init: false,
      modifiers: {
        fill: false,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this._model.init = true;
        if (attr.name.includes('.fill') && this.hasAttribute('value')) {
          this._model.modifiers.fill = true;
        }
        break;
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._model.init && this._model.modifiers.fill) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._model.modifiers.fill && !this._x_model.get()) {
            this._x_model.set(this.getAttribute('value'));
            this._model.modifiers.fill = false;
          } else this._model.modifiers.fill = false;
        }
      }, 1);
    }
  }
}

customElements.define('h-select', HSelect);
