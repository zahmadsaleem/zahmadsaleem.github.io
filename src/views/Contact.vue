<template>
    <div id="contact" class="m-0 p-5 bg-dark text-light text-center">
      <div class="w-100 mx-auto">
          <h3 class="font-heavy py-2">AHMAD SALEEM Z</h3>
          <b-card-text>
              <b-link href="mailto:azsaleem11@gmail.com">azsaleem11@gmail.com</b-link>
              <br>+91 9944405317<br>
              <b-link href="http://linkedin.com/in/ahmadsaleemz" class="text-secondary">LinkedIn </b-link>
              <span class="text-secondary">-</span>
              <b-link href="http://instagram.com/ah.mad.so.lame" class="text-secondary">Instagram</b-link>
              <span class="text-secondary">-</span>
              <b-link href="http://www.facebook.com/ahmadsaleemz" class="text-secondary">Facebook</b-link>
              <span class="text-secondary">-</span>
              <b-link href="http://www.github.com/zahmadsaleem" class="text-secondary">GitHub</b-link>
          </b-card-text>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: ['categoryfilter', 'projectcategory']
}
</script>

<style lang="scss">

</style>
