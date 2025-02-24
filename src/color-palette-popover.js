import ColorPalettePopover from '@ui5/webcomponents/dist/ColorPalettePopover.js';

export default class HColorPalettePopover extends ColorPalettePopover {
  constructor() {
    super();
  }
}

customElements.define('h-color-palette-popover', HColorPalettePopover);
