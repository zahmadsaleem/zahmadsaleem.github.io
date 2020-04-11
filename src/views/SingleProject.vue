<template>
  <div id="modal-project" class="w-100">
    <div
      class="row p-0"
      v-on:keyup.stop.right="nextProject()"
      v-on:keyup.stop.left="previousProject()"
    >
      <!-- content side -->
      <div class="col-lg-4">
        <b-card
          :title="activeproject.projectName"
          :sub-title="activeproject.projectContext"
          text-variant="#ababab"
        >
          <b-card-text v-html="activeproject.Description"></b-card-text>
          <b-link
            v-for="(link, i) in activeproject.links"
            :key="i"
            :href="link"
            class="card-link text-primary"
            >Link</b-link
          >
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
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide v-for="(image, i) in activeproject.images" :key="i">
            <template v-slot:img>
              <img
                class="d-block"
                :src="require(`@/assets/img/bg-img/${image.url}`)"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div v-else class="col-lg-8">
        <b-img-lazy
          center
          fluid
          :src="require(`@/assets/img/bg-img/${activeproject.cover}`)"
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
  props: { activeproject: Object },
  methods: {
    getThumb: function(project) {
      return project.thumb ? project.thumb : project.projectid + "-thumb.jpg";
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
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill-opacity='0.8' fill='red' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill-opacity='0.8' fill='red' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e");
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
