<template>
  <div class="max-auto px-3 text-center col-lg-4 mb-1">
    <p class="h3 text-secondary pt-2 pb-1">{{projectcategory}}</p>
    <div :id="categoryfilter" class="m-0 mt-2 p-0">
      <div
        class="proj-thumb"
        @click="showProject(project)"
        v-for="project in filterProjects(categoryfilter)"
      >
        <p class="text-light">{{project.projectName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allprojects: projects // from data.js
    };
  },
  name: "drawer",
  props: ["categoryfilter", "projectcategory", "projects"],
  methods: {
    filterProjects: function(projectPrefix) {
      return this.allprojects.filter(i => i.projectid.includes(projectPrefix));
    },
    showProject: function(activeproject) {
      this.$router.push({
        name: "proj",
        params: {
          activeproject: activeproject,
          projectid: activeproject.projectid
        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>
