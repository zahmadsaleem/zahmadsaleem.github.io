<template>
  <div id="modal-center">
    <img :src="require(`@/assets/img/bg-img/${img.url}`)" />
    <div
      class="prev-next-buttons"
      v-on:keyup.stop.right="nextImage()"
      v-on:keyup.stop.left="previousImage()"
    >
      <button @click="previousImage()" class="b-btn">
        &lsaquo; Previous
      </button>
      <button @click="nextImage()" class="b-btn float-right">
        Next &rsaquo;
      </button>
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

<style lang="postcss">
.prev-next-buttons {
  @apply fixed block w-full;
  top: 50%;
}
.b-btn {
  @apply mx-2 bg-black opacity-25 px-4 py-2 text-white  rounded;
}
.b-btn:hover {
  @apply opacity-100;
}
</style>
