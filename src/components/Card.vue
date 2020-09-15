<template>
  <div class="card">
    <p v-if="title" class="card-title">{{ title }}</p>
    <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="postcss" scoped>
.card {
  @apply mb-2 p-2 border border-gray-300 rounded;
}
.card-title {
  @apply font-bold text-blue-600 mb-2;
}
.card-subtitle {
  @apply font-semibold text-gray-600 mb-1 font-light;
}
</style>
