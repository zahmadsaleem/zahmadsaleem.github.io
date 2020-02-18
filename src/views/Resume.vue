<template>
  <b-container id="resumecontent" class="col-xl-8 col-lg-10 px-lg-5">
    <h2 class="w-100 font-heavy mb-5 py-2 text-light bg-dark pl-3 col-5 col-md-3 ml-0">RESUME</h2>
    <div v-for="headdata in $data.resumedata" class="mb-4">
      <p class="h5 text-primary pb-2 pl-4">{{headdata.heading}}</p>
      <b-card v-for="subdata in headdata.content" :sub-title="subdata.subheading" class="my-2">
        <b-card-text v-html="subdata.content"></b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      resumedata: vm.$data.resumedata
    }
  }
};
</script>

<style lang="scss">
</style>
