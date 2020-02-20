<template>
  <div id="modal-center" class="w-100 m-0">
    <b-img-lazy fluid :src="require(`@/assets/img/bg-img/${img.url}`)" />
        <div class="w-100" v-on:keyup.stop.right="nextImage()" v-on:keyup.stop.left="previousImage()">
      <b-button @click="previousImage()">&lsaquo; Previous</b-button>
      <b-button @click="nextImage()" class="float-right">Next &rsaquo;</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleImage",
  props: {img: Object},
  methods: {
    nextImage: function() {

    },
    previousImage: function() {

    }
  }
};
</script>

<style lang="scss">
#modal-center{
  margin-top: 50px;
}
</style>
