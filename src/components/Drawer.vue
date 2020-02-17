<template>
<div class="max-auto px-3 text-center col-lg-4 mb-1">
                    <!--
                    <p class="h5 text-light pl-lg-4 pl-2 py-3 proj-section-head">{{projectcategory}}</p>
                    <div :id="categoryfilter" class="m-0 mt-2 p-0 row mb-5">
                        <div class="col-4 m-0 p-2 proj-thumb text-center" @click="vueRoot.showProject(project)" v-for="project in vueRoot.filterProjects(categoryfilter)">
                            <b-img fluid 
                                :src="'img/thumb-img/' + vueRoot.getThumb(project)"
                                :alt="project.projectName"
                                class="drawerimg">
                            </b-img> 

                            <span class=" proj-name text-light bg-dark">{{project.projectName}}</span>
                        </div>
                    </div>
                    -->
                    <p class="h3 text-secondary pt-2 pb-1">{{projectcategory}}</p>
                    <div :id="categoryfilter" class="m-0 mt-2 p-0">
                        <div class="proj-thumb" @click="vueRoot.showProject(project)" v-for="project in vueRoot.filterProjects(categoryfilter)">
                            <p class="text-light">{{project.projectName}}</p>
                        </div>
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
  }
}
</script>

<style lang="scss">

</style>
