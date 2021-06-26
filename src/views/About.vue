<template>
  <container class="max-w-4xl mx-auto">
    <card class="mt-4"
      ><p class="w-1/2 p-3">{{ bio.content }}</p></card
    >
    <contact />
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
</template>

<script>
import { resume_data, bio } from "@/data/data";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Chip from "@/components/Chip";
import Contact from "@/components/Contact";

export default {
  name: "About",
  components: { Contact, Chip, Container, Card },
  data() {
    return {
      resume_data,
      bio
    };
  }
};
</script>

<style scoped></style>
