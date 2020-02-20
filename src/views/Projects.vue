<template>
  <div class="w-100 mt-5 mx-0 p-0 bg-dark pt-5" id="project-drawer">
    <div class="row w-80 m-0 justify-content-lg-center">
      <drawer projectcategory="Architecture" categoryfilter="arch"></drawer>
      <drawer projectcategory="Computational Design" categoryfilter="computational"></drawer>
      <drawer projectcategory="Code" categoryfilter="code"></drawer>
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

<style lang="scss">
#projects {
  padding-top: 75px;
  .card-body {
    padding-bottom: 0px;
  }
}
#project-drawer {
  min-height: calc(100vh - 50px) !important;
  .card {
    color: #000;
    border: 0px;
    border-radius: 0px;
    background-color: transparent;
  }
}
</style>
