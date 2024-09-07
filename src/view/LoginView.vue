<script setup lang="ts">
import { client } from "@/services/apiUsers";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref<string>("");
const password = ref<string>("");

const router = useRouter();

async function doLogin() {
  try {
    const response = await client.post("/auth", {
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      const secret = response.data.token;

      sessionStorage.setItem("token", secret);
      console.log(secret);

      router.push("/listmentor");
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
</script>

<template>
  <main>
    <div style="min-width: 300px">
      <h1>Fazer Login</h1>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-text-field
        label="Senha"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-btn @click="doLogin" type="button">Logar</v-btn>
    </div>
  </main>
</template>
