<script setup lang="ts">
import type { MentorType } from "@/Types/MentorType";
import CardMentor from "@/components/CardMentor.vue";
import { client } from "@/services/apiUsers";
import { checkLogged } from "@/utils/CheckLogged";
import { onMounted, ref } from "vue";

const mentors = ref<MentorType[]>([]);

const token = {
  headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
};

async function indexMentor() {
  try {
    const response = await client.get("/mentors", token);
    mentors.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  indexMentor(), checkLogged("/listmentor");
});
</script>

<template>
  <div class="about">
    <v-row class="ma-4">
      <v-col cols="12"><h1>Mentores</h1></v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col cols="12" sm="6" md="4" v-for="item in mentors" :key="item.id">
        <CardMentor :data="item" />
      </v-col>
    </v-row>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
