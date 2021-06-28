<template>
  <svg height="300px" width="100%" class="mt-2" xmlns="http://www.w3.org/2000/svg" @wheel="setRectWidth"
       @dblclick="reset" @mousedown="pan">
    <g :transform="`translate(${panX},0)`">
      <rect v-for="(rect,i) in rectangles" v-bind="rect" :key="i" class="animate-size"></rect>
      <text
        v-for="(rect,i) in rectangles"
        x="0"
        :transform="`translate(${rect.x + rect.width/2},0)`"
        :y="rect.y +rectangleHeight/2"
        :key="i + '-text'"
      >
        {{ texts[i].subheading }}
      </text>
    </g>
  </svg>
</template>

<script>
import {resume_data} from "@/data/data";
import {differenceInCalendarDays} from "date-fns"

const timelineStart = new Date("2011")
const timelineEnd = new Date()
const pixelsPerDay = (window.innerWidth - 100) / differenceInCalendarDays(timelineEnd, timelineStart);
const experiences = resume_data.reduce((acc, item) => acc.concat(item.content), []).filter(x => !!x.start).map(x => {
  x.start = new Date(x.start);
  x.end = x.end ? new Date(x.end) : new Date();
  return x
}).sort((a, b) => a.start - b.start);

export default {
  name: "Timeline",
  data() {
    return {
      strength: 0.1,
      panStrength: 0.3,
      panX: 0,
      rectangleHeight: 30,
      rectangles_: [],
      rectangles: [],
      texts_: [],
      texts: experiences,
      pixelsPerDay
    }
  },
  mounted() {
    const rectangles = experiences.map((item, i) => experienceToRectangle(item, i * this.rectangleHeight, this.rectangleHeight))
    this.rectangles = rectangles;
    this.rectangles_ = rectangles;
  },
  methods: {
    setRectWidth(e) {
      e.preventDefault()
      const direction = e.wheelDelta / Math.abs(e.wheelDelta)
      this.zoomRectangles(e.offsetX, direction);
    },
    zoom({x, y, width, height}, mouseX, direction) {
      const ratio = (mouseX - x - this.panX) / (x + this.panX + width - mouseX);
      width = width * (1 + this.strength * direction)
      return {
        x: mouseX - (ratio * width / (1 + ratio)) - this.panX,
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
      this.panX = 0;
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
        this.panX = this.panX + delta;
      }

      // console.log("adding listener")
      document.addEventListener("pointermove", mover)
    }
  },
}

function experienceToRectangle({start, end}, y, height) {
  const width = pixelsPerDay * differenceInCalendarDays(end, start)
  const x = pixelsPerDay * differenceInCalendarDays(start, timelineStart)
  return {x, y, width, height}
}

</script>

<style scoped>
.animate-size {
  transition: all 0.2s ease;
}

svg text {
  font-size: 12px;
  fill: crimson;
  font-family: Calibri;
  user-select: none;
  transition: all 0.3s ease;
}
</style>
