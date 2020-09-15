<template>
  <div>
    <p class="mt-8 mb-4 text-bold">{{ projectcategory }}</p>
    <div :id="categoryfilter">
      <div
        class="proj-thumb"
        @click="() => showProject(project)"
        v-for="(project, i) in filterProjects(categoryfilter)"
        :key="i"
      >
        <p class="text-gray-700">{{ project.projectName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from "@/data/data";

export default {
  data() {
    return {
      allprojects: projects
    };
  },
  name: "drawer",
  props: { categoryfilter: String, projectcategory: String, projects: Array },
  methods: {
    filterProjects(projectPrefix) {
      return this.allprojects.filter(i => i.projectid.includes(projectPrefix));
    },
    showProject(activeproject) {
      this.$router.push(`project/${activeproject.projectid}`);
    }
  }
};
</script>

<style lang="scss">
.proj-thumb {
  overflow: hidden;

  &:hover p {
    opacity: 0.7;
    cursor: pointer;
  }
}
</style>
