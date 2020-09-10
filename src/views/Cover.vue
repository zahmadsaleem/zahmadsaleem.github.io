<template>
  <div
    v-p5viewed
    id="cover-main"
    class="text-center cover-container d-flex mx-auto flex-column"
  >
    <main role="main" class="inner cover my-auto">
      <div class="justified-content-center mb-3">
        <p class="h1 d-inline px-5 py-1 bg-light">portfo.io</p>
      </div>
      <div class="justified-content-center">
        <p class="lead d-inline px-3 py-1 bg-light">Ahmad Saleem Z</p>
      </div>
    </main>
  </div>
</template>

<script>
import { generateP5Cover } from "@/utils/cover";

export default {
  name: "Cover",
  directives: {
    p5viewed: {
      // directive definition
      inserted: function () {
        generateP5Cover();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.cover {
  padding: 0 1.5rem;
  .btn-lg {
    padding: 0.75rem 1.25rem;
    font-weight: 700;
    border-color: #333;
  }
}

.cover-container {
  height: 100vh !important;
}
</style>
