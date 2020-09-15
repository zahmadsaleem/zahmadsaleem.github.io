<template>
  <div class="prev-next-buttons">
    <button @click="$emit('previous-image')" class="b-btn">
      &lsaquo; Previous
    </button>
    <button @click="$emit('next-image')" class="b-btn float-right">
      Next &rsaquo;
    </button>
  </div>
</template>
<script>
export default {
  name: "image-nav"
};
</script>
<style lang="postcss">
.prev-next-buttons {
  @apply fixed block w-full;
  top: 50%;
}

.b-btn {
  @apply mx-2 bg-black opacity-25 px-4 py-2 text-white rounded;
}

.b-btn:hover {
  @apply opacity-100;
}
</style>
