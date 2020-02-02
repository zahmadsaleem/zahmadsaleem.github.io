(function () {
    "use strict";
    const drawer =  {
        props: ['categoryfilter', 'projectcategory'],
        template: `<div class="px-3  col-lg-8 mb-1">
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
                </div>`,

        computed: {
            vueRoot: function () {
                return this.$root;
            }
        },
    }

    const projectView = {
        template: `
        <div class="w-100 m-0 p-0 bg-dark pt-5" id="project-drawer">
            <div class="row m-0 justify-content-lg-center">
                <drawer projectcategory="Architecture" categoryfilter="arch"></drawer>
                <drawer projectcategory="Computational Design" categoryfilter="computational"></drawer>
                <drawer projectcategory="Code" categoryfilter="code"></drawer>
            </div>
        </div>
        `,
        components: {drawer},
        computed: {
            vueRoot: function () {
                return this.$root;
            }
        }
    }

    const galleryView = {
        template: `    
        <b-container fluid id="gallery" class="w-100 px-0 m-0 bg-dark">
            <div class="col-lg-8 row mx-auto mb-1 py-3">
                <p class="w-100 h5 text-light pl-lg-4 pl-2 pb-3 pt-4 proj-section-head">Generative Art / Graphic Design
                </p>
                <b-col v-for="image in vueRoot.allimages" class="gallery-img col-4">
                <b-img fluid center @click="vueRoot.showMsgBox(image)" :src="'img/thumb-img/' + image.url" class="p-2 drawerimg"
                    alt="gallery image" />
                </b-col>
            </div>
        </b-container>`,
        computed: {
            vueRoot: function () {
                return this.$root;
            }
        }

    }

    const coverView = {
        template: `
        <div v-p5viewed id="cover-main" class="text-center cover-container d-flex mx-auto flex-column">
        <main role="main" class="inner cover my-auto">
            <div class="justified-content-center mb-3">
                <p class="h1 d-inline px-5 py-1 bg-light">Portfolio</p>
            </div>
            <div class="justified-content-center">
                <p class="lead d-inline px-3 py-1 bg-light">Ahmad Saleem Z</p>
            </div>
        </main>
    </div>`,
    directives: {
        p5viewed: {
          // directive definition
          inserted: function (el) {
                generateP5Cover();
          }
        }
      }
    }

    const resumeView = {
        template: `
        <b-container id="resumecontent" class="col-xl-8 col-lg-10 px-lg-5">
        <h2 class="w-100 font-heavy mb-5 py-2 text-light bg-dark pl-3 col-5  col-md-3 ml-0">
            RESUME</h2>
        <div v-for="headdata in vueRoot.resumedata" class="mb-4">
            <p class="h5 text-primary pb-2 pl-4">{{headdata.heading}}</p>
            <b-card v-for="subdata in headdata.content" :sub-title="subdata.subheading" class="my-2">
                <b-card-text v-html="subdata.content"></b-card-text>
            </b-card>
        </div>
    </b-container>`,
        computed: {
            vueRoot: function () {
                return this.$root;
            }
        }
    }

    const contactView = {
        template: `
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
            </div>`
    }

    const router = new VueRouter({
        // mode: 'history',
        routes: [
            {
                path: '/projects',
                component: projectView
            },
            {
                path: '/gallery',
                component: galleryView
            },
            {
                path: '/',
                component: coverView
            },
            {
                path: '/resume',
                component: resumeView
            },
            {
                path: '/contact',
                component: contactView
            },

        ]
    });

    router.push('/');

    var myapp = new Vue({
        router,
        el: '#app',
        data: {
            name: '',
            allprojects: projects,
            allimages: images,
            resumedata: mydata,
            imgurl: '',
            activeproject: { "images": [] },
        },
        // created: generateP5Cover,
        mounted: function () {
            let l = document.querySelectorAll('.drawerimg');
            for (let j of l) {
                (async function () {
                    j.setAttribute('src', j.getAttribute('data-src'));
                    j.removeAttribute('data-src');
                })();
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

        }
    })
})();