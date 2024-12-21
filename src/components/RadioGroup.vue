<template>
    <div class="h-radio-group">
      <label v-if="label" class="h-radio-group__label">{{ label }}</label>
      <div class="h-radio-group__options">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HRadioGroup",
    props: {
      modelValue: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
    },
    emits: ["update:modelValue"],
  
    watch: {
      modelValue(newValue) {
        // Emit the updated value when the modelValue changes
        this.$emit("update:modelValue", newValue);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  