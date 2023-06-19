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
  @apply absolute border py-1 px-2 border-gray-100 rounded-lg bg-gray-100 text-gray-500 text-sm mt-2 whitespace-nowrap;
}
</style>
