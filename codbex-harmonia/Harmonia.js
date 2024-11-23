import { Input } from '../codbex-harmonia/components/input/Input.js'
import { Button } from '../codbex-harmonia/components/button/Button.js'
import { RadioButton } from '../codbex-harmonia/components/radio/RadioButton.js'
import { Slider } from '../codbex-harmonia/components/slider/Slider.js'
import { CheckBox } from '../codbex-harmonia/components/checkbox/CheckBox.js'

export const HarmoniaInput = Input;
export const HarmoniaButton = Button;
export const HarmoniaRadioButton = RadioButton;
export const HarmoniaSlider = Slider;
export const HarmoniaCheckBox = CheckBox;

export default {
    install: (app, options) => {
        app.component('ha-input', HarmoniaInput);
        app.component('ha-button', HarmoniaButton);
        app.component('ha-radio', HarmoniaRadioButton);
        app.component('ha-slider', HarmoniaSlider);
        app.component('ha-checkbox', HarmoniaCheckBox);
    }
}