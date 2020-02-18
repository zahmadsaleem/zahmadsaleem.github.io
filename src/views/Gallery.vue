<template>
  <b-container id="gallery" class="w-100 px-0 m-0 bg-dark">
    <div class="col-lg-8 row mx-auto mb-1 py-3">
      <b-col v-for="image in allimages" class="gallery-img col-4">
        <b-img
          fluid
          center
          @click="vueRoot.showMsgBox(image)"
          :src="'@/assets/img/thumb-img/' + image.url"
          class="p-2 drawerimg"
          alt="gallery image"
        />
      </b-col>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      allimages: vm.$data.allimages
    };
  }
};
</script>

<style lang="scss">
</style>
