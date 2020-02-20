<template>
  <div id="app">
    <header class="w-100 p-2 center" id="main-nav">
      <b-navbar fixed="top" toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-lg-auto pt-2 pt-lg-1">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/gallery" class="nav-link">Gallery</router-link>
            <router-link to="/resume" class="nav-link">Resume</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <!-- Views via vue router -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // created: generateP5Cover,

  methods: {
    projectCollapse: function() {
      return window.innerWidth >= 768 ? true : false;
    }
  }
};
</script>

<style lang="scss">
</style>
