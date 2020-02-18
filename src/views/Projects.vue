<template>
  <div class="w-100 mt-5 mx-0 p-0 bg-dark pt-5" id="project-drawer">
    <div class="row w-80 m-0 justify-content-lg-center">
      <drawer projectcategory="Architecture" categoryfilter="arch"></drawer>
      <drawer projectcategory="Computational Design" categoryfilter="computational"></drawer>
      <drawer projectcategory="Code" categoryfilter="code"></drawer>
    </div>
  </div>
</template>

<script>

import drawer from '@/components/Drawer.vue'

export default {
  name: "Projects",
  mounted: function() {
    let l = document.querySelectorAll(".drawerimg");
    for (let j of l) {
      (async function() {
        j.setAttribute("src", j.getAttribute("data-src"));
        j.removeAttribute("data-src");
      })();
    }
  },
  components: {
    drawer
  }
};
</script>

<style lang="scss">
</style>
