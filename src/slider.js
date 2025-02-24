import Slider from '@ui5/webcomponents/dist/Slider.js';

export default class HSlider extends Slider {
  constructor() {
    super();
  }
}

customElements.define('h-slider', HSlider);
