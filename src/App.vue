<template>
  <div id="app">
    <navbar />
    <router-view class="pt-8"></router-view>
  </div>
</template>

<script>
import Navbar from "@/Navbar";

export default {
  components: { Navbar }
};
</script>

<style lang="scss"></style>
