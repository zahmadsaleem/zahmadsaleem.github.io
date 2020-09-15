<template>
  <container v-once class="mx-auto lg:max-w-4xl">
    <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-auto">
      <div v-for="(image, i) in allimages" :key="i">
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

<style lang="scss" scoped></style>
