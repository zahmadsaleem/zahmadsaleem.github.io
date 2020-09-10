<template>
  <div>
    <p v-if="title">{{ title }}</p>
    <p v-if="subtitle">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped></style>
