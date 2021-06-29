<template>
  <div>
    <timeline/>
    <container class="max-w-4xl mx-auto">
      <div class="mt-4 md:grid md:grid-cols-2">
        <card class="col-span-1 mr-2"
        ><p class="p-3">{{ bio.content }}</p></card
        >
        <card class="col-span-1"
        >
          <contact class="col-span-1 p-3 text-right"
          />
        </card>
      </div>
      <h2 class="text-2xl mt-16">RESUME</h2>
      <div v-for="(headdata, index) in resume_data" :key="index">
        <p class="mt-4 mb-2 ml-4 font-bold text-gray-800">
          {{ headdata.heading }}
        </p>
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
  </div>
</template>

<script>
import {resume_data, bio} from "@/data/data";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Chip from "@/components/Chip";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";

export default {
  name: "About",
  components: {Timeline, Contact, Chip, Container, Card},
  data() {
    return {
      resume_data,
      bio
    };
  }
};
</script>

<style scoped></style>
