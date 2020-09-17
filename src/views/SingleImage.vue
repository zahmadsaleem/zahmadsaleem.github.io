<template>
  <div style="height: 90vh;">
    <img
      :src="cover(img.url)"
      class="object-contain object-center w-full h-full p-2"
      alt="gallery image"
    />
    <buttons-next-previous
      @next-image="nextImage()"
      @previous-image="previousImage()"
    />
  </div>
</template>

<script>
import ButtonsNextPrevious from "@/components/ButtonsNextPrevious";
import ImageLoaderMixin from "@/mixins/image-loader";
import { images } from "@/data/data";

export default {
  name: "SingleImage",
  components: { ButtonsNextPrevious },
  mixins: [ImageLoaderMixin],
  data() {
    return {
      images,
      imageIndex: 0
    };
  },
  methods: {
    nextImage() {
      if (this.imageIndex === images.length - 1) this.imageIndex = 0;
      else this.imageIndex++;
    },
    previousImage() {
      if (this.imageIndex === 0) this.imageIndex = images.length - 1;
      else this.imageIndex--;
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
