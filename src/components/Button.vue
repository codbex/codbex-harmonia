<template>
  <button
    :class="[
      'h-button btn',
      disabled ? 'cursor-not-allowed' : '',
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
