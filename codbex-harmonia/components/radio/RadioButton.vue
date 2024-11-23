<template>
  <div class="radio-container">
  <label
      :for="id"
      class="flex items-center gap-2 cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      class="form-radio text-blue-600"
      @change="handleChange"
    />
      <span>{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("update:modelValue", this.value); // Update the v-model bound value
    },
  },
};
</script>
