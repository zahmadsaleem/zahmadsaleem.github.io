<template>
  <container id="gallery" v-once>
    <div>
      <div v-for="(image, i) in allimages" :key="i" class="gallery-img col-4">
        <img
          @click="showMsgBox(image)"
          :src="require(`@/assets/img/thumb-img/${image.url}`)"
          alt="gallery image"
        />
      </div>
    </div>
  </container>
</template>

<script>
import { images } from "@/data/data";
import Container from "@/components/Container";

export default {
  name: "Gallery",
  components: { Container },
  data() {
    return {
      allimages: images
    };
  },
  methods: {
    showMsgBox: function(img) {
      this.$router.push({
        name: "img",
        params: {
          url: img.url,
          img: img
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#gallery {
  padding-top: 40px;
}
.gallery-img {
  padding: 0px;
}
</style>
