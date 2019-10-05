(function () {
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
            showMsgBox: function (imgurl) {
                this.imgurl = imgurl
                this.$refs['mm-modal'].show()
            }
        }

    })
})();