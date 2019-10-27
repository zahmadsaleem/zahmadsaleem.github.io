(function () {
    "use strict";
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
                if (project.thumb) {
                    return project.thumb
                } else {
                    return project.projectid + '-thumb.jpg'
                }
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

        },
        computed: {
            projectCollapse: function () {
                if (window.innerWidth >= 768) {
                    return true
                } else {
                    return false
                }
            }
        },
        components: {
            drawer: Vue.component('drawer', {
                data: function () {
                    return {

                    }
                },
                props: ['projectcategory'],
                template: `<b-card no-body class="px-1  col-lg-4 m-0">
                <b-button block href="#" v-b-toggle.accordion-2 class="collapse-btn text-left pl-3"
                    variant="outline-dark">Computational Design</b-button>
                <b-collapse :visible="this.$parent.projectCollapse" id="accordion-2" class="m-0 mt-2 p-0 row">
                    <div class="col-4 m-0 p-0" v-for="project in this.$parent.filterProjects(projectcategory)">
                        <b-img fluid @click="showProject(project)"
                            :src="'img/thumb-img/' + this.$parent.getThumb(project)"
                            :alt="projectName" class="p-1">
                        </b-img>
                    </div>
                </b-collapse>
            </b-card>`
            })

        }
    })
})();