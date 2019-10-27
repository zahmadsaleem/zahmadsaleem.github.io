(function () {
    "use strict";
    Vue.component('drawer', {
        props: ['categoryfilter', 'projectcategory'],
        template: `<b-card no-body class="px-1  col-lg-4 m-0">
                    <b-button block href="#" v-b-toggle="categoryfilter" class="collapse-btn text-center pl-3"
                        variant="outline-dark">{{projectcategory}}</b-button>
                    <b-collapse :visible="vueRoot.projectCollapse()" :id="categoryfilter" class="m-0 mt-2 p-0 row">
                        <div class="col-4 m-0 p-0 proj-thumb" v-for="project in vueRoot.filterProjects(categoryfilter)">
                            <b-img fluid  @click="vueRoot.showProject(project)"
                                :src="'img/thumb-img/' + vueRoot.getThumb(project)"
                                :alt="project.projectName" class="p-1">
                            </b-img>
                            <p class="text-center proj-name text-dark mx-auto">{{project.projectName}}</p>
                        </div>
                    </b-collapse>
                </b-card>`,
        computed: {
            vueRoot: function () {
                return this.$root;
            }
        },
    })
var myapp = new Vue({
    el: '#app',
    data: {
        name: '',
        allprojects: projects,
        allimages: images,
        resumedata: mydata,
        imgurl: '',
        activeproject: { "images": [] },
    },
    methods: {
        showMsgBox: function (imgurl) {
            this.imgurl = imgurl
            this.$refs['mm-modal'].show()
        },
        filterProjects: function (projectPrefix) {
            return this.allprojects.filter(i => i.projectid.includes(projectPrefix))
        },
        showProject: function (activeproject) {
            this.activeproject = activeproject
            this.$refs['pp-modal'].show()
        },
        nextProject: function () {
            var filteredProjects = this.filterProjects(this.activeproject.projectid.split("-")[0])
            var currentIndex = filteredProjects.indexOf(this.activeproject)
            if (currentIndex < filteredProjects.length - 1) {
                this.activeproject = filteredProjects[currentIndex + 1]
            }
        },
        previousProject: function () {
            var filteredProjects = this.filterProjects(this.activeproject.projectid.split("-")[0])
            var currentIndex = filteredProjects.indexOf(this.activeproject)
            if (currentIndex != 0) {
                this.activeproject = filteredProjects[currentIndex - 1]
            }
        },
        getThumb: function (project) {
            return project.thumb ? project.thumb : (project.projectid + '-thumb.jpg')
        },
        nextImage: function () {
            var currentIndex = this.allimages.indexOf(this.imgurl)
            if (currentIndex < this.allimages.length - 1) {
                this.imgurl = this.allimages[currentIndex + 1]
            }
        },
        previousImage: function () {
            var currentIndex = this.allimages.indexOf(this.imgurl)
            if (currentIndex != 0) {
                this.imgurl = this.allimages[currentIndex - 1]
            }
        },
        projectCollapse: function () {
            return window.innerWidth >= 768 ? true : false
        },

    },

})
}) ();