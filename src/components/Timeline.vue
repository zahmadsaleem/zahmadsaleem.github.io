<template>
  <svg height="300px" width="100%" class="mt-2" xmlns="http://www.w3.org/2000/svg" @wheel="setRectWidth">
    <rect v-for="(rect,i) in rectangles" v-bind="rect" :key="i" class="animate-size"></rect>
    <rect :x="startOffset" :width="`${width}px`" height="100px" class="animate-size" fill="none" stroke="red"
          stroke-width="4px"></rect>
  </svg>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      width_: 1200,
      width: 1200,
      scaleFactor: 0.1,
      zoomFactor: 0,
      mouseX: 0,
      mousePositionRatio: 0,
      startOffset: 0,
      rectangles: [
        {x: 10, y: 0, width: 500, height: 95},
        {x: 0, y: 100, width: 200, height: 95},
        {x: 50, y: 200, width: 750, height: 95},
      ]
    }
  },
  computed: {
    currentScale() {
      return this.width / this.width_;
    },
  },
  methods: {
    setRectWidth(e) {
      e.preventDefault()
      this.mouseX = e.offsetX;
      this.zoomFactor = this.scaleFactor * e.wheelDelta / Math.abs(e.wheelDelta)
      const ratio = (this.mouseX - this.startOffset) / (this.startOffset + this.width - this.mouseX);
      this.width = this.width * (1 + this.zoomFactor)
      this.startOffset = this.mouseX - (ratio * this.width / (1 + ratio))
      this.transformRectangles();
    },
    transform({x, y, width, height}) {
      const ratio = (this.mouseX - x) / (x + width - this.mouseX);
      width = width * (1 + this.zoomFactor)
      return {
        x: this.mouseX - (ratio * width / (1 + ratio)),
        y,
        width,
        height
      }
    },
    transformRectangles(){
      this.rectangles =  this.rectangles.map(this.transform)
    }
  },
}


</script>

<style scoped>
.animate-size {
  transition: all 0.25s ease;
}


</style>
