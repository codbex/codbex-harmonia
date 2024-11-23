<template>
  <div class="mb-4">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-2">{{ label }}</label>
    <input
      :id="id"
      type="range"
      :min="min"
      :max="max"
      :value="modelValue"
      :placeholder="placeholder"
      class="w-full"
      :class="{ 'text-box-error': hasError }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small v-if="hasError" class="text-box-error-message">{{ errorMessage }}</small>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    id: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: "",
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "Invalid input",
    },
  },
};
</script>

<style scoped>

.text-box-input.text-box-error {
  border-color: #dc3545;
}

.text-box-error-message {
  font-size: 12px;
  color: #dc3545;
}
</style>
