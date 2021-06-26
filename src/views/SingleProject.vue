<template>
  <container class="">
    <div class="lg:grid lg:grid-cols-3 mt-10">
      <!-- content side -->
      <div class="lg:col-span-1">
        <card
          :title="activeproject.projectName"
          :sub-title="activeproject.projectContext"
          class="m-2 max-w-3xl"
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
        <div v-if="activeproject.images.length > 0" class="banner-height">
          <div class="bg-white height-80p">
            <img
              :src="currentImage"
              alt="large image"
              class="object-contain w-full h-full"
            />
          </div>
          <div class="flex justify-center">
            <div
              v-for="(image, i) in activeproject.images"
              :key="i"
              class="bg-white thumb-image"
            >
              <img
                class="object-cover object-center h-full w-full p-1"
                :src="cover(image.url)"
                alt="image slot"
                @click="currentImage = cover(image.url)"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <img
            :src="cover(activeproject.cover)"
            alt="project cover"
            class="mx-auto lg:pr-2"
          />
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import Card from "@/components/Card";
import Container from "@/components/Container";
import ImageLoaderMixin from "@/mixins/image-loader";
import { projects } from "@/data/data";

export default {
  name: "SingleProject",
  mixins: [ImageLoaderMixin],
  components: { Container, Card },
  data() {
    return {
      projects,
      projectIndex: 0,
      currentImage: ""
    };
  },
  mounted() {
    let i = projects.findIndex(
      x => x.projectid === this.$route.params.projectid
    );
    if (i > -1) this.projectIndex = i;
    else {
      this.projectIndex = 0;
    }
    this.currentImage = this.cover(
      this.projects[this.projectIndex].images[0].url
    );
  },
  computed: {
    activeproject() {
      return this.projects[this.projectIndex];
    }
  }
};
</script>

<style scoped>
.banner-height {
  height: 80vh;
}
.height-80p {
  height: 80%;
}
.thumb-image {
  height: 80px;
  display: inline-block;
  width: 80px;
}
</style>
