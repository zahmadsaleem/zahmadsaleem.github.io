<template>
  <div id="modal-center">
    <img :src="require(`@/assets/img/bg-img/${img.url}`)" />
    <div
      class="w-100"
      v-on:keyup.stop.right="nextImage()"
      v-on:keyup.stop.left="previousImage()"
    >
      <button @click="previousImage()">&lsaquo; Previous</button>
      <button @click="nextImage()" class="float-right">Next &rsaquo;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleImage",
  props: { img: Object },
  methods: {
    nextImage: function() {},
    previousImage: function() {}
  }
};
</script>

<style lang="scss"></style>
