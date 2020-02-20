<template>
  <div
    id="modal-project"
    hide-footer
    hide-header
    centered
    class="bg-dark w-100 m-0"
  >
    <div
      class="row p-0"
      v-on:keyup.stop.right="nextProject()"
      v-on:keyup.stop.left="previousProject()"
    >
      <!-- content side -->
      <div class="col-lg-4">
        <div class="w-100">
          <b-button @click="previousProject()">&lsaquo; Previous</b-button>
          <b-button @click="nextProject()" class="float-right">Next &rsaquo;</b-button>
        </div>
        <b-card
          :title="activeproject.projectName"
          :sub-title="activeproject.projectContext"
          text-variant="#ababab"
        >
          <b-card-text v-html="activeproject.Description"></b-card-text>
          <b-link
            v-for="link in activeproject.links"
            :href="link"
            class="card-link text-primary"
          >Link</b-link>
        </b-card>
      </div>

      <!-- image side -->
      <div v-if="activeproject.images.length > 0" class="col-lg-8">
        <b-carousel
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="960"
          img-height="640"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide
            v-for="image in activeproject.images"
            :img-src="'img/bg-img/' + image.url"
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <div v-else class="col-lg-8">
        <b-img-lazy
          center
          fluid
          :src="'img/bg-img/' + activeproject.cover"
          alt="project cover"
          class="m-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["activeproject"],
  methods: {
    getThumb: function(project) {
      return project.thumb ? project.thumb : project.projectid + "-thumb.jpg";
    }
  }
};
</script>

<style lang="scss">
</style>
