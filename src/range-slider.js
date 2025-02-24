import RangeSlider from '@ui5/webcomponents/dist/RangeSlider.js';

export default class HRangeSlider extends RangeSlider {
  constructor() {
    super();
  }
}

customElements.define('h-range-slider', HRangeSlider);
