<template>
  <div id="modal-center">
    <img :src="require(`@/assets/img/bg-img/${img.url}`)" />
    <image-nav @next-image="nextImage()" @previous-image="previousImage()" />
  </div>
</template>

<script>
import ImageNav from "@/components/ImageNav";
import { images } from "@/data/data";

export default {
  name: "SingleImage",
  components: { ImageNav },
  data() {
    return {
      images,
      imageIndex: 0
    };
  },
  methods: {
    nextImage: function() {
      if (this.imageIndex === images.length) {
        this.imageIndex = 0;
        return;
      }
      this.imageIndex++;
    },
    previousImage: function() {
      if (this.imageIndex === 0) {
        this.imageIndex = images.length;
        return;
      }
      this.imageIndex--;
    }
  },
  mounted() {
    let i = this.images.findIndex(x => x.url === this.$route.params.url);
    if (i > -1) this.imageIndex = i;
    else this.imageIndex = 0;
  },
  computed: {
    img() {
      return this.images[this.imageIndex];
    }
  }
};
</script>
