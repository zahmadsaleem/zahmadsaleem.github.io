<template>
  <div id="app" class="w-100 mx-auto px-0">
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
export default {};
</script>

<style lang="scss">
a,
a:focus,
a:hover {
  color: #fff;
}

.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
  background-color: #fff;
  border: 0.05rem solid #fff;
}

a.anchor {
  display: block;
  position: relative;
  top: 20px;
  visibility: hidden;
}

#main-nav {
  border-bottom-color: #fff !important;
  border-bottom-width: 2px !important;
}
</style>
