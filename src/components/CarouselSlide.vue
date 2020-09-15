<template>
  <div>
    <img :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  name: "CarouselSlide",
  props: {
    imgSrc: String,
    imgAlt: String
  }
};
</script>

<style scoped></style>
