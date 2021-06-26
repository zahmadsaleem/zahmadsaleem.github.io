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
        <router-link to="/about">About</router-link>
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
  @apply flex max-w-md mx-auto;
}

.nav-item {
  @apply mr-6;
  @apply text-gray-100 text-center flex-grow;
}
</style>
