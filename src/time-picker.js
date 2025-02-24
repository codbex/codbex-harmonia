import TimePicker from '@ui5/webcomponents/dist/TimePicker.js';

export default class HTimePicker extends TimePicker {
  constructor() {
    super();
  }

  valueChange() {
    this._x_model.set(this.value);
  }

  inputChange(value, valid) {
    if (valid) {
      this._x_model.set(this.value);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.valueChange);
    this.addEventListener('input', this.inputChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', this.valueChange);
    this.removeEventListener('input', this.inputChange);
  }
}

customElements.define('h-time-picker', HTimePicker);
