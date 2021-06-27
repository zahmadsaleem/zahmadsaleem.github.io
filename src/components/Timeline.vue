<template>
  <svg height="300px" width="100%" class="mt-2" xmlns="http://www.w3.org/2000/svg" @wheel="setRectWidth"
       @dblclick="reset" @mousedown="pan">
    <rect v-for="(rect,i) in rectangles" v-bind="rect" :key="i" class="animate-size"></rect>
  </svg>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      width_: 1,
      width: 1,
      strength: 0.1,
      panStrength: 0.3,
      rectangles_: [],
      rectangles: []
    }
  },
  mounted() {
    const rectangles = new Array(30)
      .fill(0)
      .map((_, i) => ({
        x: Math.trunc(Math.random() * 500),
        y: i * 10,
        width: Math.trunc(Math.random() * 1000),
        height: 9
      }));
    this.rectangles = rectangles;
    this.rectangles_ = rectangles;
  },
  computed: {
    currentScale() {
      return this.width / this.width_;
    },
  },
  methods: {
    setRectWidth(e) {
      e.preventDefault()
      const direction = e.wheelDelta / Math.abs(e.wheelDelta)
      this.width = this.width * (1 + this.strength * direction)
      this.zoomRectangles(e.offsetX, direction);
    },
    zoom({x, y, width, height}, mouseX, direction) {
      const ratio = (mouseX - x) / (x + width - mouseX);
      width = width * (1 + this.strength * direction)
      return {
        x: mouseX - (ratio * width / (1 + ratio)),
        y,
        width,
        height
      }
    },
    move({x, y, width, height}, delta) {
      return {
        x: x + delta,
        y,
        width,
        height
      }
    },
    zoomRectangles(mouseX, direction) {
      this.rectangles = this.rectangles.map((rect) => this.zoom(rect, mouseX, direction))
    },
    reset() {
      this.rectangles = this.rectangles_
      this.width = this.width_
    },
    pan(e) {
      // starting x
      let currentX = e.x;
      const mover = (e_) => {
        const delta = (e_.x - currentX) * this.panStrength
        // console.log(delta, e_.button,e);
        const isButtonPressed = e_.buttons === 1
        if (!isButtonPressed) {
          // console.log("removing listener")
          document.removeEventListener("pointermove", mover)
          return
        }
        // console.log("panning")
        currentX = currentX + delta;
        this.rectangles = this.rectangles.map((rect) => this.move(rect, delta))
      }

      // console.log("adding listener")
      document.addEventListener("pointermove", mover)
    }
  },
}


</script>

<style scoped>
.animate-size {
  transition: all 0.25s ease;
}


</style>
