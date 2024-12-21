<template>
    <option :value="value" :disabled="disabled">
      <slot>{{ label }}</slot>
    </option>
  </template>
  
  <script>
  export default {
    name: "HOption",
    props: {
      value: {
        type: String,
        default: "",
      },
      label: {
        type: String,
        default: "",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  