<script setup lang="ts">
import router from "@/router";
import { addMentorPost } from "@/services/apiUsers";
import { checkLogged } from "@/utils/CheckLogged";
import { onMounted, ref } from "vue";

const name = ref<string>("");
const email = ref<string>("");
const cpf = ref<string>("");

async function addMentor() {
  try {
    const response = await addMentorPost(name.value, email.value, cpf.value);
    if (response) {
      router.push("/listmentor");
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  checkLogged("/addmentor");
});
</script>

<template>
  <main>
    <div>
      <h1>Adicionar um Mentor</h1>
      <v-text-field label="Nome" v-model="name"></v-text-field>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-text-field label="CPF" v-model="cpf"></v-text-field>

      <v-btn @click="addMentor" type="button">Adicionar um Mentor</v-btn>
    </div>
  </main>
</template>
