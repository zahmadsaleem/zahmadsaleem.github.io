<template>
  <container id="resumecontent" v-once class="max-w-4xl mx-auto">
    <h2>RESUME</h2>
    <div v-for="(headdata, index) in resumedata" :key="index">
      <p>{{ headdata.heading }}</p>
      <card
        v-for="(subdata, i) in headdata.content"
        :title="subdata.subheading"
        :subtitle="subdata.details"
        :key="i"
      >
        <div v-if="Array.isArray(subdata.content)">
          <chip
            v-for="(c, j) in subdata.content"
            :content="c"
            :key="j"
            class="inline-flex"
          />
        </div>
        <p v-else>{{ subdata.content }}</p>
      </card>
    </div>
  </container>
</template>

<script>
import { resume_data } from "@/data/data";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Chip from "@/components/Chip";

export default {
  name: "Resume",
  components: { Chip, Container, Card },
  data() {
    return {
      resumedata: resume_data
    };
  },
  methods: {
    content(subdata) {
      let isArray = Array.isArray(subdata);
      return isArray ? subdata : [subdata];
    }
  }
};
</script>

<style lang="scss" scoped>
#resumecontent {
  padding: 75px 10px 10px;
}
</style>
