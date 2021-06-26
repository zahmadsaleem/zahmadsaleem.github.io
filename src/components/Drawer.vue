<template>
  <div>
    <p class="mt-8 mb-4 text-bold">{{ projectCategory }}</p>
    <div :id="categoryFilter">
      <div
        class="proj-thumb"
        v-for="(project, i) in filterProjects(categoryFilter)"
        @click="showProject(project)"
        :key="i"
      >
        <p class="text-gray-700">{{ project.projectName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {filterProjects} from "@/utils/projects";

export default {
  name: "drawer",
  props: { categoryFilter: String, projectCategory: String, projects: Array },
  emits: ['wtf'],
  methods: {
    filterProjects,
    showProject(activeProject) {
      this.$router.push({
        name: "proj",
        params: {
          projectid: activeProject.projectid
        }
      });
    }
  }
};
</script>

<style>
.proj-thumb {
  overflow: hidden;
}

.proj-thumb:hover p {
  opacity: 0.7;
  cursor: pointer;
}
</style>
