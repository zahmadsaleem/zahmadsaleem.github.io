<template>
  <b-container id="gallery" class="w-100 mx-auto px-0 m-0 bg-dark" v-once>
    <div class="col-lg-8 row mx-auto mb-1 py-3">
      <b-col v-for="image in allimages" class="gallery-img col-4">
        <b-img
          fluid
          center
          @click="showMsgBox(image)"
          :src="require(`@/assets/img/thumb-img/${image.url}`)"
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
      allimages: images,
    };
  },
  methods:{
    showMsgBox: function(img) {
      this.$router.push({
        name : "img",
        params:{
          url:img.url,
          img:img
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#gallery{
    padding-top: 40px;
  
}
.gallery-img {
    padding: 0px;
}
</style>
