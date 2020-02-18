<template>
  <b-modal
    id="modal-center"
    hide-footer
    hide-header
    centered
    class="bg-dark w-100 m-0"
  >
    <div class="w-100" v-on:keyup.stop.right="nextImage()" v-on:keyup.stop.left="previousImage()">
      <b-button @click="previousImage()">&lsaquo; Previous</b-button>
      <b-button @click="nextImage()" class="float-right">Next &rsaquo;</b-button>
    </div>
    <b-img-lazy fluid :src="'img/bg-img/' + imgurl.url" />
  </b-modal>
</template>

<script>
export default {
  name: "Projects",
  methods: {
    nextImage: function() {
      var currentIndex = this.allimages.indexOf(this.imgurl);
      if (currentIndex < this.allimages.length - 1) {
        this.imgurl = this.allimages[currentIndex + 1];
      }
    },
    previousImage: function() {
      var currentIndex = this.allimages.indexOf(this.imgurl);
      if (currentIndex != 0) {
        this.imgurl = this.allimages[currentIndex - 1];
      }
    }
  }
};
</script>

<style lang="scss">
</style>
