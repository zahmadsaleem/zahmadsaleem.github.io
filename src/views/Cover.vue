<template>
  <div v-p5viewed id="cover-main" class="text-center cover-container d-flex mx-auto flex-column">
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

export default {
  name: 'Cover',
  directives: {
    p5viewed: {
      // directive definition
      inserted: function () {
          generateP5Cover();
      }
    }
  }
}

</script>

<style lang="scss">
</style>
