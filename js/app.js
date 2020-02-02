(function () {
    "use strict";
    Vue.component('drawer', {
        props: ['categoryfilter', 'projectcategory'],
        template: `<div class="px-3  col-lg-8 mb-1">
                    <p class="h5 text-light pl-lg-4 pl-2 py-3 proj-section-head">{{projectcategory}}</p>
                    <div :id="categoryfilter" class="m-0 mt-2 p-0 row mb-5">
                        <div class="col-4 m-0 p-2 proj-thumb text-center" @click="vueRoot.showProject(project)" v-for="project in vueRoot.filterProjects(categoryfilter)">
                            <b-img fluid 
                                :data-src="'img/thumb-img/' + vueRoot.getThumb(project)"
                                :alt="project.projectName"
                                class="drawerimg">
                            </b-img>
                            <span class=" proj-name text-light bg-dark">{{project.projectName}}</span>
                        </div>
                    </div>
                </div>`,

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
    created: generateP5Cover,
    mounted: function () {
        let l = document.querySelectorAll('.drawerimg');
        for (let j of l){
            j.setAttribute('src', j.getAttribute('data-src'));
            j.removeAttribute('data-src');
        }
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