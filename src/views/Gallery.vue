<template>
    <b-container fluid id="gallery" class="w-100 px-0 m-0 bg-dark">
        <div class="col-lg-8 row mx-auto mb-1 py-3">
            <b-col v-for="image in vueRoot.allimages" class="gallery-img col-4">
            <b-img fluid center @click="vueRoot.showMsgBox(image)" :src="'img/thumb-img/' + image.url" class="p-2 drawerimg"
                alt="gallery image" />
            </b-col>
        </div>
    </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

</style>
