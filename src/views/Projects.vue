<template>
  <div class="max-w-4xl mx-auto">
    <div class="grid md:grid-cols-3 gap-4 text-center">
      <drawer projectcategory="Architecture" categoryfilter="arch" />
      <drawer
        projectcategory="Computational Design"
        categoryfilter="computational"
      />
      <drawer projectcategory="Code" categoryfilter="code" />
    </div>
    <router-view name="project"></router-view>
  </div>
</template>

<script>
import drawer from "@/components/Drawer.vue";

export default {
  name: "Projects",
  components: {
    drawer
  }
};
</script>

<style lang="scss"></style>
