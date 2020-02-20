<template>
  <div id="modal-center" hide-footer hide-header centered class="bg-dark w-100 m-0">
    <div class="w-100" v-on:keyup.stop.right="nextImage()" v-on:keyup.stop.left="previousImage()">
      <b-button @click="previousImage()">&lsaquo; Previous</b-button>
      <b-button @click="nextImage()" class="float-right">Next &rsaquo;</b-button>
    </div>
    <b-img-lazy fluid :src="'img/bg-img/' + img.url" />
  </div>
</template>

<script>
export default {
  name: "SingleImage",
  props: ["img"],
  methods: {
    nextImage: function() {

    },
    previousImage: function() {

    }
  }
};
</script>

<style lang="scss">
</style>
