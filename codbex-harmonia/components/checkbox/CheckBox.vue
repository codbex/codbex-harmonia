<template>
  <label
      :for="id"
      class="flex items-center gap-2 cursor-pointer select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
    <input
      type="checkbox"
      :id="id"
      :value="value"
      :checked="modelValue"
      :disabled="disabled"
      class="form-checkbox text-blue-600"
      @change="handleChange" />
      <span>{{ label }}</span>
    </label>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    id: {
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
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("update:modelValue", event.target.checked); // Update the v-model bound value
    },
  },
};
</script>
