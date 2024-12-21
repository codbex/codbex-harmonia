<template>
    <div class="h-checkbox">
      <label v-if="label" :for="id" class="h-checkbox__label">
        <input
          type="checkbox"
          :id="id"
          v-model="checked"
          class="h-checkbox__input"
          :disabled="disabled"
        />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: "HCheckBox",
    props: {
      modelValue: {
        type: Boolean,
        default: false,
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
      checked: {
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
  