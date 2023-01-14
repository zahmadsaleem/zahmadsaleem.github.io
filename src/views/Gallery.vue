<template>
  <container v-once class="mx-auto lg:max-w-4xl">
    <div class="grid lg:grid-cols-4 grid-cols-3 gap-4 my-auto">
      <div v-for="(image, i) in allimages" :key="i">
        <img
          @click="showMsgBox(image)"
          :src="thumb(image.url)"
          alt="gallery image"
        />
      </div>
    </div>
  </container>
</template>

<script>
import { images } from "@/data/data";
import Container from "@/components/Container";
import  {cover, thumb} from "@/utils/image-loader";

export default {
  name: "Gallery",
  components: { Container },
  setup(){
    return {
      cover, thumb
    }
  },
  data() {
    return {
      allimages: images
    };
  },
  methods: {
    showMsgBox: function(img) {
      this.$router.push(`/img/${img.url}`);
    }
  }
};
</script>

<style scoped></style>
