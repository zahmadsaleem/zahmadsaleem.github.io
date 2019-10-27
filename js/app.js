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
            projectCollapse: function(){
                if(window.innerWidth >= 768){
                    return true
                }else{
                    return false
                }
            }
        }
    })
})();