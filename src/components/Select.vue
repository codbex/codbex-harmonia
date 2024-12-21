<template>
    <div class="h-select">
      <label v-if="label" :for="id" class="h-select__label">{{ label }}</label>
      <select
        :id="id"
        v-model="selectedValue"
        class="h-select__input"
        :disabled="disabled"
      >
        <slot></slot>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "HSelect",
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
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      selectedValue: {
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
  