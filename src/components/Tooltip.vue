<script setup></script>

<template>
  <div class="tooltip">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.tooltip {
  @apply absolute border border-gray-500 rounded-lg bg-gray-300 text-white;
}
</style>
