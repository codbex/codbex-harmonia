import ColorPalette from '@ui5/webcomponents/dist/ColorPalette.js';

export default class HColorPalette extends ColorPalette {
  constructor() {
    super();
  }
}

customElements.define('h-color-palette', HColorPalette);
