<template>
  <container id="resumecontent" v-once>
    <h2>RESUME</h2>
    <div v-for="(headdata, index) in resumedata" :key="index">
      <p>{{ headdata.heading }}</p>
      <card
        v-for="(subdata, i) in headdata.content"
        :subtitle="subdata.subheading"
        :key="i"
      >
        <p>{{ subdata.content }}</p>
      </card>
    </div>
  </container>
</template>

<script>
import { resume_data } from "@/data/data";
import Card from "@/components/Card";
import Container from "@/components/Container";

export default {
  name: "Resume",
  components: { Container, Card },
  data() {
    return {
      resumedata: resume_data
    };
  }
};
</script>

<style lang="scss" scoped>
#resumecontent {
  padding: 75px 10px 10px;
}
</style>
