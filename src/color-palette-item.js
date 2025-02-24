import ColorPaletteItem from '@ui5/webcomponents/dist/ColorPaletteItem.js';

export default class HColorPaletteItem extends ColorPaletteItem {
  constructor() {
    super();
  }
}

customElements.define('h-color-palette-item', HColorPaletteItem);
