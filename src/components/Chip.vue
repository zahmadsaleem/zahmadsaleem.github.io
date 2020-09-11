<template>
  <div>
    <p class="chip-item">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    content: String
  }
};
</script>

<style lang="postcss" scoped>
.chip-item {
  @apply rounded bg-blue-200 px-2 m-1;
}
</style>
