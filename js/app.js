(function() {
    "use strict";
    var myapp = new Vue({
        el: '#app',
        data: {
            name: '',
            allprojects: projects,
            allimages: images,
            resumedata: mydata,
            imgurl: ''
        },
        methods: {
            showMsgBox: function(imgurl) {
                this.imgurl = imgurl
                this.$refs['mm-modal'].show()
            },
            changeCover: function(ref,src,event) {
                var cover = this.$refs[ref + '-cover'][0].$el;
                cover.src = 'img/bg-img/' +src;
            }
        }

    })
})();