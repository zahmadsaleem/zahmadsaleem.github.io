export default {
  name: "ImageLoaderMixin",
  methods: {
    cover(fname) {
      return require(`@/assets/img/bg-img/${fname}`);
    },
    thumb(fname) {
      return require(`@/assets/img/thumb-img/${fname}`);
    }
  }
};
