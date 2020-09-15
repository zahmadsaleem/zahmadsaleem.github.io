<template>
  <container class="">
    <div class="lg:grid lg:grid-cols-3 mt-10">
      <!-- content side -->
      <div class="lg:col-span-1">
        <card
          :title="activeproject.projectName"
          :sub-title="activeproject.projectContext"
          class="m-2 h-64 max-w-3xl"
        >
          <p v-html="activeproject.Description"></p>
          <a
            v-for="(link, i) in activeproject.links"
            :key="i"
            :href="link"
            target="_blank"
            class="text-blue-600"
            >Link</a
          >
        </card>
      </div>

      <!-- image side -->
      <div class="lg:col-span-2">
        <div v-if="activeproject.images.length > 0">
          <carousel>
            <carousel-slide
              v-for="(image, i) in activeproject.images"
              :key="i"
              :img-src="cover(image.url)"
              img-alt="image slot"
            />
          </carousel>
        </div>
        <div v-else>
          <img
            :src="cover(activeproject.cover)"
            alt="project cover"
            class="m-1"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import CarouselSlide from "@/components/CarouselSlide";
import Container from "@/components/Container";
import ImageLoaderMixin from "@/mixins/image-loader";
import { projects } from "@/data/data";

export default {
  name: "SingleProject",
  mixins: [ImageLoaderMixin],
  components: { Container, Card, Carousel, CarouselSlide },
  data() {
    return {
      projects,
      projectIndex: 0
    };
  },
  mounted() {
    let i = projects.findIndex(
      x => x.projectid === this.$route.params.projectid
    );
    if (i > -1) this.projectIndex = i;
    else this.projectIndex = 0;
  },
  computed: {
    activeproject() {
      return this.projects[this.projectIndex];
    }
  }
};
</script>

<style lang="scss" scoped></style>
