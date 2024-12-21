<template>
  <button
    :class="[
      'h-button px-4 py-2 font-semibold rounded-md transition-all duration-200',
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500',
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "HButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>

</style>
