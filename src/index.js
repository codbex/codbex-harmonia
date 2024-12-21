import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import DatePicker from "./components/DatePicker.vue";
import CheckBox from "./components/CheckBox.vue";
import Select from "./components/Select.vue";
import Option from "./components/Option.vue";
import RadioButton from "./components/RadioButton.vue";
import RadioGroup from "./components/RadioGroup.vue";
// import TextArea from "./components/TextArea.vue";
import Slider from "./components/Slider.vue";
import Table from "./components/Table.vue";
import TableColumn from "./components/TableColumn.vue";
import './styles/theme.css';

const components = {
  HInput: Input,
  HButton: Button,
  HDatePicker: DatePicker,
  HCheckBox: CheckBox,
  HSelect: Select,
  HOption: Option,
  HRadioButton: RadioButton,
  HRadioGroup: RadioGroup,
//   HaTextArea: TextArea,
  HSlider: Slider,
  HTable: Table,
  HTableColumn: TableColumn,
};

const Harmonia = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default Harmonia;
