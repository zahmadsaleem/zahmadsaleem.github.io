<template>
  <!--  #cover-main referenced in generateP5Cover -->
  <div id="cover-main">
    <div class="cover">
      <div class="site-header">
        <p>Ahmad Saleem Z</p>
      </div>
    </div>
  </div>
</template>

<script>
import { generateP5Cover } from "@/utils/cover";

export default {
  name: "Cover",
  mounted() {
    generateP5Cover();
  }
};
</script>

<style lang="postcss">
canvas {
  z-index: -100;
}

.cover {
  @apply mt-64 w-full mx-auto text-center absolute;
}

.site-header {
  @apply py-4 mx-auto max-w-xs bg-black opacity-75 shadow-lg rounded text-white text-opacity-100;
}
</style>
