import ColorPicker from '@ui5/webcomponents/dist/ColorPicker.js';

export default class HColorPicker extends ColorPicker {
  constructor() {
    super();
  }
}

customElements.define('h-color-picker', HColorPicker);
