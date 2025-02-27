import MultiComboBox from '@ui5/webcomponents/dist/MultiComboBox.js';

export default class HMultiComboBox extends MultiComboBox {
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
    // TODO: This should be more efficient. Compare changes between arrays and update values.
    const selectedValues = [];
    this.selectedValues.forEach((element) => {
      selectedValues.push(element['value'] ?? element['text']);
    });
    this._x_model.set(selectedValues);
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
          if (this._model.modifiers.fill && !this._x_model.get().length) {
            const selectedValues = [];
            this.selectedValues.forEach((element) => {
              selectedValues.push(element['value'] ?? element['text']);
            });
            this._x_model.set(selectedValues);
          } else {
            this.selectedValues.forEach((element) => {
              element.selected = false;
            });
            this.selectedValues.length = 0;
          }
          this._model.modifiers.fill = undefined;
          this.addEventListener('selection-change', this.valueChange);
        }
      }, 1);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('selection-change', this.valueChange);
  }
}

customElements.define('h-multi-combobox', HMultiComboBox);
