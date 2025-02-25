import Select from '@ui5/webcomponents/dist/Select.js';

export default class HSelect extends Select {
  constructor() {
    super();
    this.model = {
      init: false,
      modifiers: {
        fill: false,
      },
    };
    for (const attr of this.attributes) {
      if (attr.name.startsWith('x-model')) {
        this.model.init = true;
        if (attr.name.includes('.fill') && this.hasAttribute('value')) {
          this.model.modifiers.fill = true;
        }
        break;
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.model.init && this.model.modifiers.fill) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this.model.modifiers.fill && !this._x_model.get()) {
            this._x_model.set(this.getAttribute('value'));
            this.model.modifiers.fill = false;
          } else this.model.modifiers.fill = false;
        }
      }, 1);
    }
  }
}

customElements.define('h-select', HSelect);
