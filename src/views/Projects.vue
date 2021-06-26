<template>
  <div class="max-w-4xl mx-auto">
    <div class="grid md:grid-cols-3 gap-4 text-center">
      <drawer projectCategory="Architecture" categoryFilter="arch" />
      <drawer
          projectCategory="Computational Design"
        categoryFilter="computational"
      />
      <drawer projectCategory="Code" categoryFilter="code"/>
    </div>
    <router-view name="project"/>
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

<style ></style>
