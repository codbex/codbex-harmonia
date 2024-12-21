<template>
  <div class="h-radio-button">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isSelected"
      :disabled="disabled"
      class="h-radio-button__input"
      @change="handleChange"
    />
    <label v-if="label" :for="id" class="h-radio-button__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "HRadioButton",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSelected() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    handleChange() {
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>

<style scoped>

</style>
