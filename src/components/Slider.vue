<template>
    <div class="h-slider">
      <label v-if="label" :for="id" class="h-slider__label">{{ label }}</label>
      <input
        type="range"
        :id="id"
        :min="min"
        :max="max"
        :step="step"
        v-model="sliderValue"
        class="h-slider__input w-full"
        :disabled="disabled"
        @input="handleInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "HSlider",
    props: {
      modelValue: {
        type: Number,
        default: 0,
      },
      label: {
        type: String,
        default: "",
      },
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
      step: {
        type: Number,
        default: 1,
      },
      showValue: {
        type: Boolean,
        default: true,
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
      sliderValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        },
      },
    },
    methods: {
      handleInput() {
        // You can add additional logic when the slider input changes if necessary.
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  