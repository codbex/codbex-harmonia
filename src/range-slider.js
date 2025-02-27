import RangeSlider from '@ui5/webcomponents/dist/RangeSlider.js';

export default class HRangeSlider extends RangeSlider {
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
        this._model.modifiers.fill = attr.name.includes('.fill');
        break;
      }
    }
  }

  valueChange() {
    this._x_model.set({
      startValue: this.startValue,
      endValue: this.endValue,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._model.init) {
      const intervalID = setInterval(() => {
        if (this._x_model) {
          clearInterval(intervalID);
          if (this._x_removeModelListeners['default']) {
            this._x_removeModelListeners['default']();
            delete this._x_removeModelListeners['default'];
            this._x_forceModelUpdate = () => {};
          }
          const mValue = this._x_model.get();
          if (this._model.modifiers.fill && (mValue === undefined || mValue === null || (!mValue['startValue'] && !mValue['endValue']))) {
            if (this.min !== this.startValue && this.max !== this.endValue) {
              this.valueChange();
            } else if (this.min !== this.startValue) {
              this._x_model.set({
                startValue: this.startValue,
                endValue: undefined,
              });
            } else if (this.max !== this.endValue) {
              this._x_model.set({
                startValue: undefined,
                endValue: this.endValue,
              });
            }
          } else {
            if (typeof mValue['startValue'] === 'number') {
              this.startValue = mValue['startValue'];
            }
            if (typeof mValue['endValue'] === 'number') {
              this.endValue = mValue['endValue'];
            }
          }
          this._model.modifiers.fill = undefined;
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

customElements.define('h-range-slider', HRangeSlider);
