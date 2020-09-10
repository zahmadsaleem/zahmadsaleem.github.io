<template>
  <div v-p5viewed id="cover-main">
    <div class="cover">
      <div>
        <p>portfo.io</p>
      </div>
      <div>
        <p>Ahmad Saleem Z</p>
      </div>
    </div>
  </div>
</template>

<script>
import { generateP5Cover } from "@/utils/cover";

export default {
  name: "Cover",
  directives: {
    p5viewed: {
      // directive definition
      inserted: function() {
        generateP5Cover();
      }
    }
  }
};
</script>

<style lang="scss">
canvas {
  z-index: -100;
}
.cover {
  padding: 0 1.5rem;
}

.cover-container {
  height: 100vh !important;
}
</style>
