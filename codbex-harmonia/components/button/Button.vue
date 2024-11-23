<template>
  <button
    :class="buttonClass"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="loading-spinner"></span>
    <span v-else><slot /></span>
  </button>
</template>

<script>
export default {
  name: "StyledButton",
  props: {
    type: {
      type: String,
      default: "default", // Options: default, primary, success, danger, warning
    },
    size: {
      type: String,
      default: "medium", // Options: small, medium, large
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-md transition duration-300";
      const typeClasses = {
        default:
          "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        warning: "bg-yellow-500 text-white hover:bg-yellow-600",
      }[this.type];
      const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "px-5 py-3 text-lg",
      }[this.size];
      const disabledClasses =
        "opacity-50 cursor-not-allowed pointer-events-none";

      return [
        baseClasses,
        typeClasses,
        sizeClasses,
        this.disabled || this.loading ? disabledClasses : "",
      ].join(" ");
    },
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit("click", event);
      }
    },
  },
};
</script>

<style scoped>
/* Optional loading spinner style */
.loading-spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
