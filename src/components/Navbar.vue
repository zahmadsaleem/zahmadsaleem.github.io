<template>
  <div class="nav-container d-block w-full">
    <ul class="navbar">
      <li class="nav-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gallery">Gallery</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/resume">Resume</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style lang="postcss" scoped>
.nav-container {
  @apply fixed h-16;
  @apply bg-black;
}

.navbar {
  @apply mt-6 pl-2;
  @apply flex items-stretch;
}

.nav-item {
  @apply mr-6;
  @apply text-gray-100 text-center;
}
</style>
