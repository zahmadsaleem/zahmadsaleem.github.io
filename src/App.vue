<template>
  <div id="app">
    <navbar />
    <router-view class="pt-16"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar }
};
</script>

<style lang="scss"></style>
