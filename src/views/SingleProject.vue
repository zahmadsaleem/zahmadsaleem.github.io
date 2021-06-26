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
            >Link</a
          >
        </card>
      </div>

      <!-- image side -->
      <div class="lg:col-span-2">
        <div v-if="activeproject.images.length > 0">
          <carousel id="carousel-1" style="text-shadow: 1px 1px 2px #333;">
            <carousel-slide v-for="(image, i) in activeproject.images" :key="i">
              <img :src="cover(image.url)" alt="image slot" />
            </carousel-slide>
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
import {projectById} from "@/utils/projects";

export default {
  name: "SingleProject",
  components: { Container, Card, Carousel, CarouselSlide },
  computed: {
    activeproject() {
      return projectById(this.$route.params.projectid);
    }
  },
  methods: {
    getThumb(project) {
      return project.thumb ? project.thumb : project.projectid + "-thumb.jpg";
    },
    cover(fname) {
      return require(`@/assets/img/bg-img/${fname}`);
    }
  }
};
</script>

<style  scoped></style>
