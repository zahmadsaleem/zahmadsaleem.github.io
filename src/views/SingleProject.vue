<template>
  <div id="modal-project" class="w-100">
    <div>
      <!-- content side -->
      <div>
        <card
          :title="activeproject.projectName"
          :sub-title="activeproject.projectContext"
        >
          <p v-html="activeproject.Description"></p>
          <a v-for="(link, i) in activeproject.links" :key="i" :href="link"
            >Link</a
          >
        </card>
      </div>

      <!-- image side -->
      <div v-if="activeproject.images.length > 0">
        <carousel id="carousel-1" style="text-shadow: 1px 1px 2px #333;">
          <carousel-slide v-for="(image, i) in activeproject.images" :key="i">
            <template v-slot:img>
              <img :src="cover(image.url)" alt="image slot" />
            </template>
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
</template>

<script>
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import CarouselSlide from "@/components/CarouselSlide";

export default {
  name: "SingleProject",
  components: { Card, Carousel, CarouselSlide },
  props: { activeproject: Object },
  methods: {
    getThumb: function(project) {
      return project.thumb ? project.thumb : project.projectid + "-thumb.jpg";
    },
    cover(fname) {
      return require(`@/assets/img/bg-img/${fname}`);
    }
  }
};
</script>

<style lang="scss" scoped>
#modal-project {
  margin-top: 50px;

  .card {
    border: 0px;
    border-radius: 0px;
  }
}
</style>

<style lang="scss">
.carousel-indicators li {
  background-color: #f00;
  width: 10px;
  height: 10px;
}

.carousel-item {
  img {
    width: auto;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 600px;
  }
}
</style>
