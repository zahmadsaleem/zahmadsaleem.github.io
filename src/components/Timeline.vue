<template>
  <svg id="svg-container" height="calc(100vh - 80px)" width="99%" class="mt-2 mx-auto"
       xmlns="http://www.w3.org/2000/svg"
       @wheel.prevent="setRectWidth"
       @dblclick="reset" @mousedown="pan">
    <g :transform="`translate(${panX},0)`">
     <g>
       <g
         class="animate-size"
         v-for="(l,i) in years"
         :transform="`translate(${l.x},0)`"
         :key="i+'-year'">
         <line
           x1="0"
           x2="0"
           y1="0"
           y2="calc(100vh - 80px)"
           stroke="white"
         />
         <text :transform="`rotate(90)`" class="year">{{ l.year }}</text>
       </g>
     </g>
      <g>
        <rect v-for="(rect,i) in rectangles" v-bind="rect" :key="i+'-rect'" class="animate-size"></rect>
      </g>
      <g>
        <text
          v-for="(rect,i) in rectangles"
          x="0"
          :transform="`translate(${rect.x + 10},0)`"
          :y="rect.y + 20"
          :key="i + '-text'"
        >
          {{ texts[i].subheading }}
        </text>
      </g>
    </g>
  </svg>
</template>

<script>
import {resume_data} from "@/data/data";
import {differenceInCalendarDays, differenceInCalendarYears} from "date-fns"

const timelineStart = new Date("2010")
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
      rectangleHeight: 20,
      rectangles_: [],
      rectangles: [],
      texts_: [],
      texts: experiences,
      pixelsPerDay,
      years: new Array(
        Math.trunc(differenceInCalendarYears(timelineEnd, timelineStart))
      ).fill(0)
        .map((_, i) => 2011 + i)
        .map(yearToLine)
    }
  },
  mounted() {
    this.rectangleHeight = (window.innerHeight - 80) / experiences.length;
    const rectangles = experiences.map((item, i) => experienceToRectangle(item, i * this.rectangleHeight, this.rectangleHeight))
    this.rectangles = rectangles;
    this.rectangles_ = rectangles;
  },
  methods: {
    setRectWidth(e) {
      const direction = e.wheelDelta / Math.abs(e.wheelDelta)
      this.zoomRectangles(e.offsetX, direction);
      this.years = this.years.map(y => ({...y, ...this.zoom(y, e.offsetX, direction)}))
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
      this.years = new Array(Math.trunc(differenceInCalendarYears(timelineEnd, timelineStart)))
        .fill(0).map((_, i) => 2011 + i)
        .map(yearToLine)
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

function yearToLine(year) {
  const x = pixelsPerDay * differenceInCalendarDays(new Date(year.toString()), timelineStart)
  return {x, width: 1, year}
}

</script>

<style scoped>
.animate-size {
  transition: all 0.2s ease;
}

svg text {
  font-size: 15px;
  fill: #3eb6ea;
  user-select: none;
  transition: all 0.3s ease;
}

svg rect {
  fill: rgba(255,255,255,0.3);
}

#svg-container {
  border-radius: 2px;
  background-color: black;
}

.year {
  fill: #07748c;
  font-size: 72px;
  font-weight: bolder;
  opacity: 25%;
}
</style>
