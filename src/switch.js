import Switch from '@ui5/webcomponents/dist/Switch.js';

export default class HSwitch extends Switch {
  constructor() {
    super();
    this.type = 'checkbox';
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
        if (attr.name.includes('.fill')) {
          this.model.modifiers.fill = this.hasAttribute('checked');
        }
        break;
      }
    }
  }

  valueChange(ev) {
    this._x_model.set(this.checked);
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.model.init) {
      this.addEventListener('change', this.valueChange);
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._x_removeModelListeners['default']) {
            this._x_removeModelListeners['default']();
            delete this._x_removeModelListeners['default'];
          }
          if (this.model.modifiers.fill !== undefined) {
            this._x_model.set(this.model.modifiers.fill);
            this.model.modifiers.fill = undefined;
          } else {
            if (this._x_model.get()) {
              this.checked = true;
            } else this.checked = false;
          }
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

customElements.define('h-switch', HSwitch);
