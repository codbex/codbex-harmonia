<template>
    <div class="h-datepicker">
      <label v-if="label" :for="id" class="h-datepicker__label">{{ label }}</label>
      <input
        type="date"
        :id="id"
        v-model="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="h-datepicker__input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "HDatePicker",
    props: {
      modelValue: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
      placeholder: {
        type: String,
        default: "Select a date",
      },
      id: {
        type: String,
        default: "",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:modelValue"],
    computed: {
      inputValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  